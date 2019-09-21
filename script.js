const container = document.getElementById('container');
const colorful = document.getElementById('colorful');
const greyscale = document.getElementById('greyscale');
const changeSizeBtn = document.getElementById('changeSize');
const greyscaleBtn = document.getElementById('greyscale');
const colorfulBtn = document.getElementById('colorful');

// Default grid of 16x16
let rows = 16;
// Color mode gets changed based on the buttons pressed.
let colorMode = '';

// Create the grid. Takes in rows to do the math
const createPaintingBox = rows => {
  let totalArea = rows * rows;
  container.style.setProperty('grid-template-columns', `repeat(${rows}, auto)`);
  for (i = 0; i < totalArea; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'squares');
    container.appendChild(div);
  }
};

// Find all the divs with class .squares.
const getSquares = () => {
  const squares = document.querySelectorAll('.squares');
  return (allSquares = squares);
};

/* Add an Event Listener to each box. When you mouse over the box it
changes the background to a random color. */
const addColorBox = allSquares => {
  allSquares.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor =
        '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    });
  });
};

/* Add an Event Listener to each box. When you mouse over the box it
changes the background to a shade of grey. From White -> Black in 5 events.*/
const addGreyscaleBox = allSquares => {
  allSquares.forEach(box => {
    let lightness = 100;
    box.addEventListener('mouseover', () => {
      if (lightness > 0) {
        lightness = lightness - 20;
      }
      box.style.backgroundColor = 'hsl(0, 0%,' + lightness + '%)';
    });
  });
};

// Remove all the divs
const removePaintingBox = () => {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
};

// Change the color mode to colorful
colorfulBtn.addEventListener('click', () => {
  getSquares();
  addColorBox(allSquares);
  colorMode = 'colorful';
});

//Change the color mode to greyscale
greyscaleBtn.addEventListener('click', () => {
  getSquares();
  addGreyscaleBox(allSquares);
  colorMode = 'greyscale';
});

// Change the size of the canvas.
changeSizeBtn.addEventListener('click', function changeSize() {
  let size = prompt('How many squares across would you like? (1-100)');
  if (size === null || size === '');
  else if (size < 1 || size > 100 || size % 1 != 0 || isNaN(size)) {
    alert('Invalid Number. Please try again.');
    changeSize();
  } else {
    rows = size;
    removePaintingBox();
    createPaintingBox(rows);
    getSquares();
    if (colorMode === 'colorful') {
      addColorBox(allSquares);
    } else if (colorMode === 'greyscale') {
      addGreyscaleBox(allSquares);
    }
  }
});

createPaintingBox(rows);
getSquares();
addColorBox(allSquares);
