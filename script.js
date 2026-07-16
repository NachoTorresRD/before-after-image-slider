"use strict";

(() => {
  const compare = document.querySelector("#compare");
  const slider = document.querySelector("#slider");
  const after = document.querySelector("#after");
  const presets = [...document.querySelectorAll("[data-value]")];
  const play = document.querySelector("#play");
  const status = document.querySelector("#status");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!compare || !slider || !after || !presets.length || !play || !status) {
    console.warn("Before/After Slider: DOM incompleto.");
    return;
  }

  let value = 50;
  let dragging = false;
  let pointerFrame = 0;
  let playbackFrame = 0;
  let playbackToken = 0;
  let pendingX = 0;

  const setValue = (next, announce = false) => {
    value = Math.max(0, Math.min(100, Number(next)));
    const rounded = Math.round(value);
    compare.style.setProperty("--position", `${value.toFixed(2)}%`);
    slider.setAttribute("aria-valuenow", String(rounded));
    slider.setAttribute("aria-valuetext", `${rounded}% del diseño final`);
    presets.forEach(button => {
      button.classList.toggle("active", Math.abs(Number(button.dataset.value) - value) < .5);
    });
    if (announce) status.textContent = `${rounded}% del diseño final revelado.`;
  };

  const stopPlayback = () => {
    playbackToken += 1;
    if (playbackFrame) cancelAnimationFrame(playbackFrame);
    playbackFrame = 0;
    compare.classList.remove("is-playing");
    play.setAttribute("aria-pressed", "false");
  };

  const animateSegment = (from, to, duration, token) => new Promise(resolve => {
    const startedAt = performance.now();

    const tick = now => {
      if (token !== playbackToken) {
        resolve(false);
        return;
      }
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = progress * progress * (3 - 2 * progress);
      setValue(from + (to - from) * eased);
      if (progress < 1) playbackFrame = requestAnimationFrame(tick);
      else resolve(true);
    };

    playbackFrame = requestAnimationFrame(tick);
  });

  const playTransformation = async () => {
    stopPlayback();
    const token = playbackToken;
    compare.classList.add("is-playing");
    play.setAttribute("aria-pressed", "true");
    status.textContent = "Reproduciendo la transformación visual.";

    if (reduceMotion.matches) {
      setValue(100, true);
      stopPlayback();
      return;
    }

    if (!await animateSegment(value, 0, 480, token)) return;
    await new Promise(resolve => setTimeout(resolve, 180));
    if (token !== playbackToken) return;
    if (!await animateSegment(0, 100, 1900, token)) return;

    compare.classList.remove("is-playing");
    play.setAttribute("aria-pressed", "false");
    status.textContent = "Transformación completa: experiencia final revelada.";
  };

  const paintPointer = () => {
    const rect = compare.getBoundingClientRect();
    setValue(((pendingX - rect.left) / rect.width) * 100);
    pointerFrame = 0;
  };

  const move = event => {
    if (!dragging) return;
    pendingX = event.clientX;
    if (!pointerFrame) pointerFrame = requestAnimationFrame(paintPointer);
  };

  compare.addEventListener("pointerdown", event => {
    stopPlayback();
    dragging = true;
    compare.setPointerCapture(event.pointerId);
    pendingX = event.clientX;
    move(event);
  });

  compare.addEventListener("pointermove", move);

  compare.addEventListener("pointerup", event => {
    dragging = false;
    compare.releasePointerCapture(event.pointerId);
    setValue(value, true);
  });

  compare.addEventListener("pointercancel", () => {
    dragging = false;
  });

  slider.addEventListener("keydown", event => {
    let next = value;
    const step = event.shiftKey ? 10 : 2;
    if (event.key === "ArrowLeft") next -= step;
    else if (event.key === "ArrowRight") next += step;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 100;
    else return;
    event.preventDefault();
    stopPlayback();
    setValue(next, true);
  });

  presets.forEach(button => {
    button.addEventListener("click", () => {
      stopPlayback();
      setValue(Number(button.dataset.value), true);
    });
  });

  play.addEventListener("click", playTransformation);
  setValue(50);
})();
