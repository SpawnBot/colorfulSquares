const container = document.getElementById('container');

let rows = 16;
let columns = 16;
let totalArea = rows * columns;

for (i = 0; i < totalArea; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', 'squares');
  container.appendChild(div);
}

let squares = document.querySelectorAll('.squares');

squares.forEach(box => {
  box.addEventListener('mouseover', () => {
    // Set the background to a random color:
    box.style.backgroundColor =
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  });
});
