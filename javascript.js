const container = document.querySelector('#container');
let normal = 16;


function generateGrid(choice) {
    for (let i = 0; i < (choice * choice); i++) {
    const box = document.createElement('div');
    const boxSize = `${960 / choice}px`;
    box.classList.toggle('box');
    box.style.width = boxSize;
    box.style.height = boxSize;
    box.style.opacity = 1;
    container.appendChild(box);
    box.addEventListener('mouseover', () => {
    box.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    if (box.style.opacity > 0) {
    box.style.opacity = parseFloat(box.style.opacity) - 0.1;
    }
});
}
}

generateGrid(normal);

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    resetGrid();
    generateGrid(normal);
});

const resize = document.querySelector('#resize');
resize.addEventListener('click', () => {
    resetGrid();
    choice = parseInt(prompt('Enter a number',''));

    if (choice > 100 || choice < 1) {
        alert('Choose a number between 1 and 100!')
    } else {
        generateGrid(choice);
        normal = choice;
    }
});

    



