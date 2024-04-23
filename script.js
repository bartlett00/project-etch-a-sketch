

const container = document.querySelector('#sketch-container');

for (let i = 0; i < 256; i++) {
    const sketchBlock = document.createElement('div');
    sketchBlock.setAttribute('class', 'block');
    container.appendChild(sketchBlock);
}

const blockSelector = document.querySelectorAll('.block');

for (block in blockSelector) {

}