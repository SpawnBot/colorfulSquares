const container = document.getElementById('container');
const colorful = document.getElementById('colorful');
const greyscale = document.getElementById('greyscale');
const changeSizeBtn = document.getElementById('changeSize');
const greyscaleBtn = document.getElementById('greyscale');
const colorfulBtn = document.getElementById('colorful');

let rows = 16;

const createPaintingBox = rows => {
  let totalArea = rows * rows;
  container.style.setProperty('grid-template-columns', `repeat(${rows}, auto)`);
  for (i = 0; i < totalArea; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'squares');
    container.appendChild(div);
  }
};

const getSquares = () => {
  const squares = document.querySelectorAll('.squares');
  return (allSquares = squares);
};

const addColorBox = allSquares => {
  allSquares.forEach(box => {
    box.addEventListener('mouseover', () => {
      // Set the background to a random color:
      box.style.backgroundColor =
        '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    });
  });
};

//Not working yet:
const addGreyscaleBox = allSquares => {
  let lightness = 100;
  allSquares.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'hsl(0, 0%,' + lightness + '%)';
      lightness = lightness - 10;
    });
  });
};

const removePaintingBox = () => {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
};

colorfulBtn.addEventListener('click', () => {
  getSquares();
  addColorBox(allSquares);
});

greyscaleBtn.addEventListener('click', () => {
  getSquares();
  addGreyscaleBox(allSquares);
});

changeSizeBtn.addEventListener('click', function changeSize() {
  let size = prompt('How many squares across would you like? (1-100)');
  if (size < 1 || size > 100 || isNaN(size)) {
    alert('Invalid Number. Please try again.');
    changeSize();
  } else {
    rows = size;
  }
  removePaintingBox();
  createPaintingBox(rows);
  getSquares();
  addColorBox(allSquares);
});

createPaintingBox(rows);
getSquares();
addColorBox(allSquares);
