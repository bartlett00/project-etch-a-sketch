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
    if (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container');
    container.appendChild(gridContainer);

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        gridContainer.appendChild(row);
        
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

const gridBtn = document.querySelector('#newGrid');
gridBtn.addEventListener('click', () => {
    let userGrid = prompt('Enter a number', '16');
    console.log(userGrid);
    console.log(typeof userGrid);
    if (isNaN(Number(userGrid))) {
        alert('Please enter a number.');
        createGrid(16);
    } else if (userGrid > 100) {
        alert('Please enter a number between 1 and 100.');
        createGrid(16);
    } else if (userGrid === null) {
        createGrid(16);
    } else {
        createGrid(userGrid);
    }
});
