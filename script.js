const container = document.querySelector('#sketch-container');
/*
for (let i = 0; i < 256; i++) {
    const sketchBlock = document.createElement('div');
    sketchBlock.setAttribute('class', 'block');
    container.appendChild(sketchBlock);
    sketchBlock.addEventListener('mouseover', () => {
        sketchBlock.classList.toggle('hovering');
    });
};
*/

function createGrid(size) {
for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    for (let i = 0; i < size; i++) {
        const sketchBlock = document.createElement('div');
        sketchBlock.setAttribute('class', 'block');
        row.appendChild(sketchBlock);
        sketchBlock.addEventListener('mouseover', () => {
            sketchBlock.classList.toggle('hovering');
        });
};
}
}

createGrid(16);
/*
function generateGrid(size) {
    let pixelSize = size*size;
    console.log(pixelSize);
    document.querySelector('body').removeChild('#sketch-container');
    const block = document.createElement('div');
    for (let i = 0; i < pixelSize; i++) {
        block.setAttribute('class', 'block');
        container.appendChild(block);
        block.addEventListener('mouseover', () => {
            block.classList.toggle('hovering');
        });
    }
}
*/


const gridBtn = document.querySelector('#newGrid');
const popup = document.querySelector('#popup');
gridBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  gridBtn.classList.add('hidden');
});

const confirmBtn = document.querySelector('#confirm');
let newGridSize;
confirmBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    gridBtn.classList.remove('hidden');
    newGridSize = document.querySelector('#newGridSize').value;
    console.log(newGridSize);
    createGrid(newGridSize);
});


