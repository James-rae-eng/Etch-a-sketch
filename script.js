//slider
let values = [36,49,64,81,100,121,144,169,196,225]; 

let input = document.getElementById('input'),
    output = document.getElementById('output');

let numberOfBlocks;

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
    
    //set block black with mouseover
    let block = document.querySelectorAll('.block');

    block.forEach((block) => {
        block.addEventListener("mouseover", () => {
            block.setAttribute("style", "background-color:black;")
        });
    });  

    //clear button
    const clearButton = document.getElementById("clearButton");
    block.forEach((block) => {
        clearButton.addEventListener("click", () => {
            block.setAttribute("style", "background-color:white;")
        });
    });  

}

   


