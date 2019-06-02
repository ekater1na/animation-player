/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */

import { startAnimation } from './animations.js';

const colorPickerEl = document.getElementById('color_picker');

// ColorPicker
window.state = {
  currentTool: '',
};

colorPickerEl.addEventListener('click', () => {
  window.state.currentTool = 'colorPicker';
  colorPickerEl.classList.add('highlight-color-picker');
});

const headerEl = document.getElementById('header');

headerEl.addEventListener('click', () => {
  window.state.currentTool = 'none';
  colorPickerEl.classList.remove('highlight-color-picker');
});

// Bucket

const bucketEl = document.getElementById('bucket');

// bucketEl.addEventListener('click', function() {});

window.state = {
  currentTool: '',
};

bucketEl.addEventListener('click', () => {
  window.state.currentTool = 'bucket';
  bucketEl.classList.add('highlight-color-picker');
});

const headerEl1 = document.getElementById('header');

headerEl1.addEventListener('click', () => {
  window.state.currentTool = 'none';
  bucketEl.classList.remove('highlight-color-picker');
});


document.addEventListener('click', (event) => {
  const b = (event && event.target) || window.event.srcElement;
  if (
    window.state.currentTool === 'bucket'
        && b.className === 'canvas-item'
  ) {
    event.stopPropagation
      ? event.stopPropagation()
      : (event.cancelBubble = !0);
    event = window.getComputedStyle
      ? getComputedStyle(b, '')
      : b.currentStyle;
    event = event.backgroundColor;
    const element = document.getElementById('chosen_color');
    const currentColor = getComputedStyle(element).backgroundColor;
    b.style.backgroundColor = currentColor;
  } else if (window.state.currentTool === 'colorPicker') {
    const colorValueEl = document.getElementById('chosen_color');
    colorValueEl.style.background = getComputedStyle(b).backgroundColor || 'none';
  } else if (
    window.state.currentTool === 'transform'
        && b.className === 'canvas-item'
  ) {
    eventMove.stopPropagation
      ? eventMove.stopPropagation()
      : (eventMove.cancelBubble = !0);
    eventMove = window.getComputedStyle
      ? getComputedStyle(b, '')
      : b.currentStyle;
    eventMove = eventMove.borderRadius;
    if (b.style.borderRadius === '50%') {
      b.style.borderRadius = '0%';
    } else {
      b.style.borderRadius = '50%';
    }
  }
});

// Transform
const transformEl = document.getElementById('transform');

transformEl.addEventListener('click', () => {});

window.state = {
  currentTool: '',
};

transformEl.addEventListener('click', () => {
  window.state.currentTool = 'transform';
  transformEl.classList.add('highlight-color-picker');
});

const headerEl2 = document.getElementById('header');

headerEl2.addEventListener('click', () => {
  window.state.currentTool = 'none';
  transformEl.classList.remove('highlight-color-picker');
});

// Add frame
const frames = document.getElementById('frames');

function createFrame() {
  const newItem = document.createElement('div');
  newItem.classList.add('canvas-item');

  const delBtn = document.createElement('button');
  delBtn.innerText = 'Delete';
  delBtn.addEventListener('click', () => {
    newItem.remove();
  });


  // Duplicate
  const duplBtn = document.createElement('button');
  duplBtn.innerText = 'Duplicate';
  duplBtn.className = 'dupl-frame-btn';

  const newItem1 = document.createElement('div');
  duplBtn.addEventListener('click', () => {
    newItem1.classList.add('canvas-item');

    frames.appendChild(newItem1);
  });

  newItem.appendChild(delBtn);
  newItem.appendChild(duplBtn);
  frames.appendChild(newItem);
}


document.getElementById('add-frame-btn')
  .addEventListener('click', createFrame);


startAnimation();

createFrame();
