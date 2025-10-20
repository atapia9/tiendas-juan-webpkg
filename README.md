# Informe Ejecutivo — Análisis de Tiendas de Juan

Este repositorio contiene un **paquete listo para GitHub Pages** con:
- `index.html`: informe ejecutivo interactivo con gráficas (Plotly).
- `assets/`: estilos, scripts y (si ejecutas el análisis geográfico) imágenes y mapa Folium.
- `data/metrics.json`: datos del informe (edítalo con tus resultados reales).
- `data/raw/`: coloca aquí tus CSV/XLSX crudos para el ETL.
- `notebooks/InformeTiendasAlura.ipynb`: notebook lista para abrir en Google Colab.
  
## Cómo usar

1. **Sube este repositorio a GitHub** (p. ej. `usuario/tiendas-juan`).
2. Activa **GitHub Pages** en `Settings → Pages` (Source: `Deploy from a branch`, Branch: `main` o `gh-pages`).  
3. Abre `https://usuario.github.io/tiendas-juan/` para ver el informe.  
4. Ejecuta en la notebook los bloques **ETL mínimo**, **Exportador de métricas** y, si lo deseas, **Análisis geográfico**.  
5. Actualiza `data/metrics.json` (se genera automáticamente al ejecutar el exportador).

## Abrir en Colab

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/USUARIO/REPO/blob/main/notebooks/InformeTiendasAlura.ipynb)

> Cambia `USUARIO/REPO` por tu usuario y nombre de repositorio.

## Estructura

```
.
├── index.html
├── assets
│   ├── style.css
│   └── report.js
├── data
│   ├── metrics.json
│   └── raw/
└── notebooks
    └── InformeTiendasAlura.ipynb
```

## Contenido del informe

- **Facturación total por tienda** (comparativo)
- **Categorías más populares** (top por tienda)
- **Promedio de evaluación de clientes** (comparativo)
- **Productos más y menos vendidos** (listados por tienda)
- **Costo promedio de envío por tienda** (comparativo)
- **Geografía de ventas (opcional)**: dispersión, heatmap y mapa interactivo (Folium)

---

© 2025 Armando Tapia. Publicación para fines educativos y de demostración.
