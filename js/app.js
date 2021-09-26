const board = document.querySelector('#board');
const SQUARES_NUMBER = 600;
const colors = [
  '#E9967A',
  '#B22222',
  '#C71585',
  '#FF4500',
  '#9400D3',
  '#D2691E',
  '#800080',
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 6px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const indx = Math.floor(Math.random() * colors.length);
  return colors[indx];
}
