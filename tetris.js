

document.addEventListener('keydown', handleKey);

function handleKey(e) {
  if (e.key === 'ArrowLeft') {
    moveLeft();
  } else if (e.key === 'ArrowRight') {
    moveRight();
  } else if (e.key === 'ArrowDown') {
    moveDown(); // for manual drop
  }
}


function moveLeft() {
  undraw();
  const atLeftEdge = currentShape.some(index => 
    (currentPosition + index) % width === 0
  );

  if (!atLeftEdge) {
    const canMove = currentShape.every(index =>
      !cellsArray[currentPosition + index - 1].classList.contains('taken')
    );
    if (canMove) currentPosition -= 1;
  }

  draw();
}

function moveRight() {
  undraw();
  const atRightEdge = currentShape.some(index => 
    (currentPosition + index) % width === width - 1
  );

  if (!atRightEdge) {
    const canMove = currentShape.every(index =>
      !cellsArray[currentPosition + index + 1].classList.contains('taken')
    );
    if (canMove) currentPosition += 1;
  }

  draw();
}





const playground = document.querySelector('.playground');
const width = 10;
const height = 20;
const totalCells = width * height;
const cellsArray = [];

const colors = [
  '#FF3CAC', '#784BA0', '#2B86C5', '#00F5A0',
  '#FFD700', '#FF6B6B', '#FF8C00', '#7FFF00', '#DA70D6'
];

// Create grid
for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  playground.appendChild(cell);
  cellsArray.push(cell);

  // Mark last row as taken to simulate bottom
  if (i >= totalCells - width) {
    cell.classList.add('taken');
  }
}

// Tetromino shapes
const lTetromino = [
  [1, width+1, width*2+1, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2+1, width*2],
  [width, width*2, width*2+1, width*2+2]
];

const zTetromino = [
  [0, width, width+1, width*2+1],
  [width+1, width+2, width*2, width*2+1],
  [0, width, width+1, width*2+1],
  [width+1, width+2, width*2, width*2+1]
];

const tTetromino = [
  [1, width, width+1, width+2],
  [1, width+1, width+2, width*2+1],
  [width, width+1, width+2, width*2+1],
  [1, width, width+1, width*2+1]
];

const oTetromino = [
  [0, 1, width, width+1],
  [0, 1, width, width+1],
  [0, 1, width, width+1],
  [0, 1, width, width+1]
];

const iTetromino = [
  [1, width+1, width*2+1, width*3+1],
  [width, width+1, width+2, width+3],
  [1, width+1, width*2+1, width*3+1],
  [width, width+1, width+2, width+3]
];

const jTetromino = [
  [0, width, width*2, width*2+1],
  [width, width+1, width+2, 2],
  [0, 1, width+1, width*2+1],
  [width, width*2, width*2+1, width*2+2]
];

const sTetromino = [
  [1, 2, width, width+1],
  [0, width, width+1, width*2+1],
  [1, 2, width, width+1],
  [0, width, width+1, width*2+1]
];

const theTetrominoes = [
  lTetromino, zTetromino, tTetromino,
  oTetromino, iTetromino, jTetromino, sTetromino
];

// Initial state
let currentPosition = 4;
let currentRotation = 0;
let currentShapeIndex = Math.floor(Math.random() * theTetrominoes.length);
let currentShape = theTetrominoes[currentShapeIndex][currentRotation];
let currentColor = colors[Math.floor(Math.random() * colors.length)];

function draw() {
  currentShape.forEach(index => {
    cellsArray[currentPosition + index].classList.add('colored');
    cellsArray[currentPosition + index].style.backgroundColor = currentColor;
  });
}

function undraw() {
  currentShape.forEach(index => {
    cellsArray[currentPosition + index].classList.remove('colored');
    cellsArray[currentPosition + index].style.backgroundColor = '';
  });
}

function moveDown() {
  undraw();
  currentPosition += width;
  draw();
  freeze();
}

function freeze() {
  const nextPosition = currentPosition + width;

  const atBottom = currentShape.some(index => {
    const nextIndex = nextPosition + index;
    return nextIndex >= totalCells || cellsArray[nextIndex].classList.contains('taken');
  });

  if (atBottom) {
    currentShape.forEach(index => {
      cellsArray[currentPosition + index].classList.add('taken');
    });

    // New shape
    spawnNewTetromino();
  }
}

function spawnNewTetromino() {
  currentPosition = 4;
  currentRotation = 0;
  currentShapeIndex = Math.floor(Math.random() * theTetrominoes.length);
  currentShape = theTetrominoes[currentShapeIndex][currentRotation];
  currentColor = colors[Math.floor(Math.random() * colors.length)];

  // Game Over check
  const isGameOver = currentShape.some(index =>
    cellsArray[currentPosition + index].classList.contains('taken')
  );

  if (isGameOver) {
    clearInterval(timerId);
    alert('Game Over');
  } else {
    draw();
  }
}

// Start the game
draw();
let timerId = setInterval(moveDown, 1000);
