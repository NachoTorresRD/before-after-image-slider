# Before After Image Slider

![Preview](assets/preview.svg)

A comparison of two original SVGs operated through drag, mouse, touch, keyboard, and quick positions.

## Features

- `role="slider"` with synchronized ARIA values.
- Arrow keys, Shift + arrows, Home, and End.
- Buttons for 0%, 50%, and 100%.
- Local SVG images with no dependencies.

## Live demo

[before-after-image-slider.netlify.app](https://before-after-image-slider.netlify.app)

## Installation

Clone the repository, enter `before-after-image-slider`, and open `index.html`.

## Project structure

Comparison markup in `index.html`, clipping in `style.css`, multimodal input in `script.js`, and illustrations in `assets/`.

## Customization

Replace `before.svg` and `after.svg` with identically framed images and preserve explicit dimensions.

## Accessibility

The control announces percentage and direction, works by keyboard, and provides clearly labelled alternative buttons.

## Performance

Clipping uses `clip-path`, dragging groups writes by frame, and the images are lightweight local SVGs.

## License and credits

[MIT](LICENSE). Created by [Nacho Torres](https://github.com/NachoTorresRD) for [NTDESWEB](https://www.ntdesweb.com) with [NT-SKILL SUPREME](https://github.com/NachoTorresRD/nt-skill-supreme).

[View on GitHub](https://github.com/NachoTorresRD/before-after-image-slider) · [Work with NTDESWEB](https://www.ntdesweb.com)
