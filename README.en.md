# Before After Image Slider

![Preview](assets/preview.svg)

A high-contrast comparison that transforms a flat wireframe into a futuristic experience with 3D, glass, light, and motion.

## Features

- `role="slider"` with synchronized ARIA values.
- Arrow keys, Shift + arrows, Home, and End.
- Buttons for 0%, 50%, and 100%.
- On-demand cinematic transformation playback.
- Animated final SVG scene with a 3D sphere, orbits, particles, and floating cards.
- Coherent visual direction: the final design reveals on the left while the draft remains on the right.
- Complete comparator visible in one desktop shot.

## Live demo

[fxpreview.ntdesweb.dev](https://fxpreview.ntdesweb.dev/)

## Installation

Clone the repository, enter `before-after-image-slider`, and open `index.html`.

## Project structure

Comparison markup in `index.html`, clipping and visual polish in `style.css`, capture composition in `capture.css`, multimodal playback in `script.js`, and SVG scenes in `assets/`.

## Customization

Replace `before.svg` and `after.svg` with identically framed scenes, preserve explicit dimensions, and adapt the alternative text.

## Accessibility

The control announces percentage and direction, works by keyboard, and provides clearly labelled alternative buttons.

## Performance

Clipping and playback batch writes by frame; scenes are local SVG files and all motion honors `prefers-reduced-motion`.

## License and credits

[MIT](LICENSE). Created by [Nacho Torres](https://github.com/NachoTorresRD) for [NTDESWEB](https://www.ntdesweb.com) with [NT-SKILL SUPREME](https://github.com/NachoTorresRD/nt-skill-supreme).

[View on GitHub](https://github.com/NachoTorresRD/before-after-image-slider) · [Work with NTDESWEB](https://www.ntdesweb.com)
