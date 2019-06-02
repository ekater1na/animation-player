/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
const canvas = document.getElementById('preview');

const fpsRange = document.getElementById('fpsRange');

function draw(color) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 150, 150);
}

function startDrawing(fps) {
  let colorInd = 0;
  return setInterval(() => {
    const frames = document.getElementsByClassName('canvas-item');
    if (frames.length > 0) {
      draw(getComputedStyle(frames[colorInd]).backgroundColor);
      colorInd += 1;
      if (colorInd >= frames.length) {
        colorInd = 0;
      }
    }
  }, 1000 / fps);
}

export function startAnimation() {
  if (canvas.getContext) {
    let id = startDrawing(fpsRange.value);

    fpsRange.addEventListener('change', (event) => {
      clearInterval(id);
      id = startDrawing(event.target.value);
    });
  }
}
