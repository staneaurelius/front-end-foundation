console.log('Ethc-a-Sketch!');

// Generate Square divs
const mainContainer = document.querySelector('.container');
for (let i=0; i<16; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');

    for (let j=0; j<16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        rowContainer.appendChild(grid);
    };

    mainContainer.appendChild(rowContainer);
};

// Add onMouseOver event listener
const squareGrids = document.querySelectorAll('.grid');
squareGrids.forEach((squareGrid) => {
    squareGrid.addEventListener('mouseover', (e) => {
        e.target.classList.add('active');
    });
});