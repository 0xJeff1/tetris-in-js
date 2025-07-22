
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

let currentposition = 4;
const hel = Math.floor(Math.random() * 7);

function render()
{

  let shape = theTetrominoes[hel][0];
  
  for(let i = 0 ; i < shape.length ; i++)
  {
      cellsarray[shape[i] + currentposition].classList.add('colored');
      cellsarray[shape[i] + currentposition].style.backgroundColor= col;
  }
  return(shape);
}

// function undraw(shape)
// {
//   for(let i = 0 ; i < shape.length ; i++)
//     {
//         cellsarray[shape[i] + currentposition].classList.remove('colored');
//         cellsarray[shape[i] + currentposition].style.backgroundColor= 'none';
//     }
//     return(shape);
// }


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() 
{
  let i = 0;
  const width = 10;

  while (i < 20) {
    let ships = render();      // draw shape
    // undraw(ships);         // optional: remove shape
    currentposition += width;  // move down
    console.log(currentposition);
    i++;
    await sleep(700);          // wait 700ms (not 7 million!)
  }
}

run(); // start the async loop



// function gravity(shape)
// {
//   undraw(shape);
//   currentposition += width;
//   render();
// }


//  let shapes = render();
//  gravity(shapes);
 






// function moveDown() {
//   undraw();
//   currentPosition += width;
//   draw();
//   freeze(); // check if it hit the bottom or another shape
// }