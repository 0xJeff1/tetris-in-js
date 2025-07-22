
const playground = document.querySelector('.playground');
const width = 10;
const height = 20;

const cellsarray = [];

const colors = [
  '#FF3CAC', 
  '#784BA0', 
  '#2B86C5', 
  '#00F5A0', 
  '#FFD700', 
  '#FF6B6B', 
  '#FF8C00', 
  '#7FFF00', 
  '#DA70D6' 
];

const colorb = Math.floor(Math.random() * 9);

const totalcells = width * height;

const col = colors[colorb];

for(let i = 0 ; i < totalcells ; i++ )
{
    const cells = document.createElement('div');
    cells.classList.add('cell');
    playground.appendChild(cells);
    cellsarray.push(cells);
}





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

const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino, jTetromino, sTetromino];



function render()
{
  const hel = Math.floor(Math.random() * 7);

  let shape = theTetrominoes[hel][0];
  
  for(let i = 0 ; i < shape.length ; i++)
  {
      cellsarray[shape[i]].classList.add('colored');
      cellsarray[shape[i]].style.backgroundColor= col;
  }
}

function gravity()
[
  
]

let j = 0;
while(j < 5)
{
  render();
  gravity();
}






// function moveDown() {
//   undraw();
//   currentPosition += width;
//   draw();
//   freeze(); // check if it hit the bottom or another shape
// }