console.log('Ethc-a-Sketch!');

// Parse & show slider input value
let gridSize = 16;
const sizeSlider = document.querySelector('input');
const sizeText = document.querySelector('span');

sizeSlider.addEventListener('input', (e) => {
    gridSize = sizeSlider.value;
    sizeText.textContent = gridSize;
});

// Function for generating new square divs
function generateGrid (mainContainer, gridSize) {
    let cellSize = 480/gridSize;

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.lastChild);
    };

    for (let i=0; i<gridSize; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        rowContainer.style.cssText = `width: 480px; height: ${cellSize}px`

        for (let j=0; j<gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.cssText = `width: ${cellSize}px; height: ${cellSize}px`
            rowContainer.appendChild(cell);
        };

        mainContainer.appendChild(rowContainer);
    };
};

// Enable cell coloring
function colorCells () {
    const squareCells = document.querySelectorAll('.cell');
    squareCells.forEach((squareCell) => {
        squareCell.addEventListener('mouseover', (e) => {
            if (e.target.style.backgroundColor) {
                // Increase opacity if cell is colored
                e.target.style.opacity = `${parseFloat(e.target.style.opacity) + 0.1}`;
            } else {
                // Add random color otherwise
                let redValue = Math.round(Math.random() * 255),
                    greenValue = Math.round(Math.random() * 255),
                    blueValue = Math.round(Math.random() * 255);
                e.target.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
                e.target.style.opacity = "0.3";
            };
        });
    });
};

// Generate colorable cells
const mainContainer = document.querySelector('.grid-container');
generateGrid(mainContainer, gridSize);
colorCells();

// Event listener for changing grid size
const clearButton = document.querySelector('button');
clearButton.addEventListener('click', (e) => {
    generateGrid(mainContainer, gridSize);
    colorCells();
});