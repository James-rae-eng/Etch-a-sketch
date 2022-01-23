//slider
let values = [100,121,144,169,196,225,256,289,324,400]; 
let input = document.getElementById('input'),
    output = document.getElementById('output');

let numberOfBlocks;

//color button
let colorToggle = 0;
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    greyToggle = 0;
    if (colorToggle === 0) {
        colorToggle = 1;
        generateGrid();
    }
    else {
        colorToggle = 0;
        generateGrid();
    }
});

//gradual grey button
let greyToggle = 0;
const greyButton = document.getElementById("greyButton");
greyButton.addEventListener("click", () => {
    colorToggle = 0;
    if (greyToggle === 0) {
        greyToggle = 1;
        generateGrid();
    }
    else {
        greyToggle = 0;
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
    if (colorToggle === 0 && greyToggle === 0) {
        block.forEach((block) => {
            block.addEventListener("mouseover", () => {
                block.style.backgroundColor = "black";
            });
        });  
    }
    else if (greyToggle === 1) {
        block.forEach((block) => {
            let opacityIncrease = 0.1;
            block.addEventListener("mouseover", () => {
                block.style.backgroundColor = "black";
                opacityIncrease += 0.1;
                block.style.opacity = opacityIncrease;
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




 


   


