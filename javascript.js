const container = document.querySelector('#container');

const choice = parseInt(prompt('Enter a number',''));

for (let i = 0; i < choice; i++) {
    const box = document.createElement('div');
    box.classList.toggle('box');
    container.appendChild(box);
}