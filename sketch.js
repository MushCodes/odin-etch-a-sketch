const container = document.querySelector('.container')
const defaultBtn = document.querySelector('.default')
const colourBtn = document.querySelector('.colour')
const colourPicker = document.querySelector('.colour-picker')
const eraserBtn = document.querySelector('.eraser')
const clearBtn = document.querySelector('.clear')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.slider-value')

let defaultGridSize = slider.value
let gridColour = "black";
let mouseDown = false
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function createGrid(gridSize){
    
    container.style.gridTemplateColumns = `repeat(${defaultGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${defaultGridSize}, 1fr)`;

    for(let i = 0; i < gridSize * gridSize; i++){
        const box = document.createElement('div')
        box.classList.add('grid-box')
        box.addEventListener('mouseover', changeColour)
        box.addEventListener('mousedown', changeColour)
        container.appendChild(box)
    }
}

function changeColour(e){
    if(e.type === 'mouseover' && !mouseDown) return
    else{
        e.target.style.backgroundColor = gridColour;
    }
}

function defaultClick(){
    gridColour = "black";
}

function colour(){
    gridColour = colourPicker.value;
}

function erase(){
    gridColour = "white";
}

function clearGrid(){
    container.innerHTML = '';
    createGrid(defaultGridSize);
}

function newSliderValue(value) {
    sliderValue.innerHTML = `${value} x ${value}`;
    defaultGridSize = value;
}

defaultBtn.addEventListener('click', defaultClick)
colourBtn.addEventListener('click', colour)
clearBtn.addEventListener('click', clearGrid)
eraserBtn.addEventListener('click',erase)
slider.onmousemove = (e) => newSliderValue(e.target.value)
slider.onclick = (e) => newSliderValue(e.target.value)

window.onload = () => {
    createGrid(defaultGridSize)
}
