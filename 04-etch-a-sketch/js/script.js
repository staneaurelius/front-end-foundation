console.log('Ethc-a-Sketch!');

const mainContainer = document.querySelector('.container');

for (let i=0; i<16; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');

    for (let j=0; j<16; j++) {
        const grid = document.createElement('div');
        rowContainer.appendChild(grid);
    };

    mainContainer.appendChild(rowContainer);
};