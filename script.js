const container = document.querySelector('#sketch-container');
for (let i = 0; i < 256; i++) {
    const sketchBlock = document.createElement('div');
    sketchBlock.setAttribute('class', 'block');
    container.appendChild(sketchBlock);
    sketchBlock.addEventListener('mouseover', () => {
        sketchBlock.classList.toggle('hovering');
    });
};

const gridBtn = document.querySelector('#newGrid');
gridBtn.addEventListener('click', () => {
    
});
