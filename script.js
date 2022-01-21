//slider
let values = [36,49,64,81,100,121,144,169,196,225]; 
let input = document.getElementById('input'),
    output = document.getElementById('output');

let numberOfBlocks;

//color button
let colorToggle = 0;
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    if (colorToggle === 0) {
        colorToggle = 1;
        generateGrid();
    }
    else {
        colorToggle = 0;
        generateGrid();
    }
});

input.oninput = function(){
    output.innerHTML = values[this.value];
    numberOfBlocks = values[this.value];
    generateGrid();
};
input.oninput(); //set default value

function generateGrid() {
    const oldgrid = document.getElementById('gridContainer');
    oldgrid.innerHTML = '';
    for (let x = 0; x < numberOfBlocks; x++) {
        let block = document.createElement('div');
        block.className = 'block';
        document.getElementById('gridContainer').appendChild(block);
    }
    for (const grid of document.querySelectorAll('#gridContainer')) {
        grid.style.setProperty('--cols', Math.ceil(Math.sqrt(numberOfBlocks)));
    }

    function randomColor() {
        let letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    //set block black/color with mouseover
    const block = document.querySelectorAll('.block');
    if (colorToggle === 0) {
        block.forEach((block) => {
            block.addEventListener("mouseover", () => {
                block.style.backgroundColor = "black";
            });
        });  
    }
    else {
        block.forEach((block) => {
            block.addEventListener("mouseover", () => {
                block.style.backgroundColor = randomColor();
            });
        });  
    }

    //clear button
    const clearButton = document.getElementById("clearButton");
    block.forEach((block) => {
        clearButton.addEventListener("click", () => {
            block.setAttribute("style", "background-color:white;")
        });
    });  

    //grid management button
    const gridButton = document.getElementById("gridButton");
    block.forEach((block) => {
        gridButton.addEventListener("click", () => {
           block.classList.toggle("block");
        });
    });
}




 


   


