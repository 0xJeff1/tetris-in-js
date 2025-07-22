
const playground = document.querySelector('.playground');
const width = 10;
const height = 20;

const cellsarray = [];

const totalcells = width * height;

for(let i = 0 ; i < totalcells ; i++ )
{
    const cells = document.createElement('div');
    cells.classList.add('cell');
    playground.appendChild(cells);
    cellsarray.push(cells);
}

console.log(cellsarray);