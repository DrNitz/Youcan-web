const stage = document.querySelector('.stage');
const companion = document.getElementById('companion');
const portrait = document.getElementById('companion-img');
const speech = document.getElementById('speech');
const reset = document.getElementById('reset');

const home = { x: 0.3, y: 0.62 };
let position = { ...home };
let drag = null;
let reactionTimer = null;

const happy = new Image();
happy.src = 'assets/character-happy.svg';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function bounds() {
  const stageRect = stage.getBoundingClientRect();
  const itemRect = companion.getBoundingClientRect();
  return {
    minX: itemRect.width / (2 * stageRect.width),
    maxX: 1 - itemRect.width / (2 * stageRect.width),
    minY: itemRect.height / (2 * stageRect.height),
    maxY: 1 - itemRect.height / (2 * stageRect.height),
  };
}

function place() {
  const limits = bounds();
  position.x = clamp(position.x, limits.minX, limits.maxX);
  position.y = clamp(position.y, limits.minY, limits.maxY);
  companion.style.left = `${position.x * 100}%`;
  companion.style.top = `${position.y * 100}%`;
  speech.style.left = `${clamp(position.x * 100 + 12, 2, 76)}%`;
  speech.style.top = `${clamp(position.y * 100 - 22, 2, 84)}%`;
}

function react() {
  clearTimeout(reactionTimer);
  portrait.src = happy.src;
  speech.hidden = false;
  companion.classList.add('react');
  reactionTimer = setTimeout(() => {
    portrait.src = 'assets/character-idle.svg';
    speech.hidden = true;
    companion.classList.remove('react');
  }, 1400);
}

companion.addEventListener('pointerdown', (event) => {
  const stageRect = stage.getBoundingClientRect();
  const itemRect = companion.getBoundingClientRect();
  drag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
    offsetX: event.clientX - (itemRect.left + itemRect.width / 2),
    offsetY: event.clientY - (itemRect.top + itemRect.height / 2),
    stageRect,
  };
  companion.setPointerCapture(event.pointerId);
});

companion.addEventListener('pointermove', (event) => {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const dx = event.clientX - drag.startX;
  const dy = event.clientY - drag.startY;
  if (Math.abs(dx) > 6 || Math.abs(dy) > 6) drag.moved = true;
  if (!drag.moved) return;
  position.x = (event.clientX - drag.offsetX - drag.stageRect.left) / drag.stageRect.width;
  position.y = (event.clientY - drag.offsetY - drag.stageRect.top) / drag.stageRect.height;
  place();
});

function endDrag(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const wasMoved = drag.moved;
  drag = null;
  if (companion.hasPointerCapture(event.pointerId)) {
    companion.releasePointerCapture(event.pointerId);
  }
  return wasMoved;
}

companion.addEventListener('pointerup', (event) => {
  const wasMoved = endDrag(event);
  if (wasMoved === false) react();
});

companion.addEventListener('pointercancel', endDrag);

companion.addEventListener('click', (event) => {
  if (event.detail === 0) react();
});

reset.addEventListener('click', () => {
  position = { ...home };
  place();
});

window.addEventListener('resize', place);
place();
