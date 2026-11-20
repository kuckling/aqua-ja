# 💧 Aqua'ja v2.2 — Tamizaje comunitario de agua

**Autor:** Marlon Estuardo Alvarado Kuckling · Ingeniero Industrial · Guatemala

> Tamizaje comunitario de agua con microscopio de celular. Uso educativo y de orientación.

[![Demo en vivo](https://img.shields.io/badge/Demo-En%20vivo-brightgreen?style=for-the-badge&logo=github)](https://kuckling.github.io/aqua-ja/)
[![Licencia: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Hecho en Guatemala](https://img.shields.io/badge/Hecho%20en-Guatemala-4997D0?style=for-the-badge)](https://kuckling.github.io/aqua-ja/)

---

## 💧 Qué es

Aqua'ja es una aplicación de una sola página (un archivo HTML, sin instalación) para revisar muestras de agua con el microscopio de un celular. Toma la foto de la muestra, la calibra y la analiza para detectar problemas visibles, y guarda un historial con validación.

## 🔬 Cómo funciona

1. **📸 Foto del microscopio** — se toma con la cámara o se sube un archivo.
2. **📏 Calibración (obligatoria)** — perfil por aumento, con regla micrométrica o cuadrícula Neubauer.
3. **🔍 Análisis de la imagen** — dos motores: **Local** (algoritmo clásico, funciona sin internet) y **SAM 3.1 (Meta)** (con internet; usa la clave API de Meta del propio usuario, que se escribe en un campo — no hay ninguna clave guardada en el código).
4. **🧪 Pruebas complementarias** — las que el microscopio no puede ver (coliformes / *E. coli* por kit, entre otras).
5. **✅ Resultado y recomendaciones** — además de **🗂️ Historial y validación** de las muestras revisadas.

## 🚀 Cómo usarla

- **🌐 Demo en vivo:** https://kuckling.github.io/aqua-ja/ (abre `index.html` directo en el navegador).
- **📱 Instalarla como app (PWA):** abre la demo en el celular y toca "Instalar app" o "Agregar a pantalla de inicio". Queda con su ícono (el guerrero k'iche' en la gota) y funciona **sin internet** después de la primera visita — el motor Local no necesita conexión. En iPhone se instala desde Safari → Compartir → "Agregar a pantalla de inicio".
- **💻 En local:** descarga `index.html` y ábrelo en cualquier navegador moderno. No necesita servidor ni instalación.
- **📖 Instructivo paso a paso:** [instructivo/INSTRUCTIVO.md](instructivo/INSTRUCTIVO.md) — cómo calibrar y analizar, con imágenes de práctica para aprender sin microscopio y un [ejemplo del reporte PDF](instructivo/ejemplos/reporte-ejemplo.pdf) que descarga la app. Las imágenes de práctica fueron generadas con IA y sus reglas de medición son solo para fines didácticos, no son fotos reales de microscopio.

## ⚠️ Importante

Esta herramienta ayuda a detectar problemas **visibles** (turbidez, partículas, filamentos). **No detecta bacterias, virus ni sustancias químicas.** Un resultado sin hallazgos **no garantiza que el agua sea potable** y no sustituye el análisis de laboratorio. La prueba más importante es la de coliformes / *E. coli*.

## 📄 Licencia

Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) — uso no comercial, con atribución al autor y compartiendo derivados bajo la misma licencia. Ver `LICENSE`.
