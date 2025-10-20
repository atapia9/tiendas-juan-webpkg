
async function loadMetrics(){
  const res = await fetch('data/metrics.json');
  return await res.json();
}
function barChart(x, y, title, divId){
  const trace = {x, y, type:'bar'};
  const layout = {title, paper_bgcolor:'rgba(0,0,0,0)', plot_bgcolor:'rgba(0,0,0,0)',
                  font:{color:'#fff'}, margin:{t:54,l:50,r:20,b:50}};
  Plotly.newPlot(divId, [trace], layout, {displayModeBar:false, responsive:true});
}
function stackedBarFromDict(dictPerStore, divId, title){
  const categories = Array.from(new Set(Object.values(dictPerStore).flatMap(obj => Object.keys(obj))));
  const stores = Object.keys(dictPerStore);
  const traces = categories.map(cat => ({
    x: stores, y: stores.map(s => (dictPerStore[s][cat]||0)), name: cat, type:'bar'
  }));
  const layout = {barmode:'stack', title, paper_bgcolor:'rgba(0,0,0,0)', plot_bgcolor:'rgba(0,0,0,0)', font:{color:'#fff'}};
  Plotly.newPlot(divId, traces, layout, {displayModeBar:false, responsive:true});
}
function renderExtremes(extremos){
  const container = document.getElementById('productos-extremos');
  container.innerHTML = '';
  Object.entries(extremos).forEach(([store, items])=>{
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `<h3>${store}</h3>
      <div class="grid">
        <div class="half">
          <h4>Más vendidos</h4>
          <ul>${items.mas_vendidos.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
        <div class="half">
          <h4>Menos vendidos</h4>
          <ul>${items.menos_vendidos.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
      </div>`;
    container.appendChild(card);
  });
}
(async ()=>{
  const m = await loadMetrics();
  document.getElementById('updated-at').textContent = new Date(m.updated_at).toLocaleString();
  barChart(m.stores, m.facturacion_total, 'Facturación total por tienda', 'chart-fact');
  barChart(m.stores, m.promedio_evaluacion, 'Promedio de evaluación de clientes', 'chart-eval');
  barChart(m.stores, m.costo_envio_promedio, 'Costo promedio de envío por tienda', 'chart-envio');
  stackedBarFromDict(m.categorias_top, 'chart-categorias', 'Categorías más vendidas por tienda');
  renderExtremes(m.productos_extremos);
})();
