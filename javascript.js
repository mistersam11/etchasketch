const container = document.querySelector('#container');

const choice = parseInt(prompt('Enter a number',''));
const boxSize = `${960 / choice}px`;
console.log(boxSize);

for (let i = 0; i < 16; i++) {
    const box = document.createElement('div');
    box.classList.toggle('box');
    box.style.width = boxSize;
    box.style.height = boxSize;
    container.appendChild(box);
    box.addEventListener('mouseover', () => {
    box.classList.add('used')
});
}

for (let i = 0; i < (choice * choice); i++) {
    const box = document.createElement('div');
    box.classList.toggle('box');
    box.style.width = boxSize;
    box.style.height = boxSize;
    container.appendChild(box);
    box.addEventListener('mouseover', () => {
    box.classList.add('used')
});
}

