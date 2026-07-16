# Before After Image Slider

![Vista previa](assets/preview.svg)

Comparador de dos SVG propios operable con arrastre, mouse, touch, teclado y posiciones rápidas.

## Características

- `role="slider"` con valores ARIA sincronizados.
- Flechas, Shift + flechas, Home y End.
- Botones para 0%, 50% y 100%.
- Imágenes SVG locales sin dependencias.

## Demo en vivo

[before-after-image-slider.netlify.app](https://before-after-image-slider.netlify.app)

## Instalación

Clona el repositorio, entra en `before-after-image-slider` y abre `index.html`.

## Estructura del proyecto

Comparador en `index.html`, recorte en `style.css`, entrada multimodal en `script.js` e ilustraciones en `assets/`.

## Cómo personalizarlo

Reemplaza `before.svg` y `after.svg` por imágenes del mismo encuadre; conserva sus dimensiones explícitas.

## Accesibilidad

El control anuncia porcentaje y sentido, funciona por teclado y ofrece botones alternativos con etiquetas claras.

## Rendimiento

El recorte usa `clip-path`, el arrastre agrupa escrituras por frame y las imágenes son SVG locales ligeros.

## Licencia y créditos

[MIT](LICENSE). Creado por [Nacho Torres](https://github.com/NachoTorresRD) para [NTDESWEB](https://www.ntdesweb.com) con [NT-SKILL SUPREME](https://github.com/NachoTorresRD/nt-skill-supreme).

[Ver en GitHub](https://github.com/NachoTorresRD/before-after-image-slider) · [Trabajar con NTDESWEB](https://www.ntdesweb.com)
