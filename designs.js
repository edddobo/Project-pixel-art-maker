// const variables
const inputColor = document.getElementById("colorPicker");
const tableCanvas = document.getElementById("pixelCanvas");
const inputGrid = document.getElementById("sizePicker");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");

// Draw grid as determined by height and width input value
function makeGrid(inputHeight, inputWidth) {
    removeGrid();
    for (let h = 1; h <= inputHeight.value; h++) {
        let row = tableCanvas.insertRow();
        for (let w = 1; w <= inputWidth.value; w++) {
            let cell = row.insertCell();

            // Single-click on cell listener, set color of single-clicked cell to user selected color
            cell.addEventListener("click", function() {
                cell.style.backgroundColor = inputColor.value;
            })

            // Double-click on cell listener, remove color of double-clicked cell
            cell.addEventListener("dblclick", function() {
                cell.style.backgroundColor = "#FFFFFF";
            })
         }
    }
}

// Hold-click and drag on cell listener, ability to color cells by hold-click and drag
function addColor(color) {
    var tableCell = document.querySelectorAll("table");
    let coloring = false;
    for (let i = 0; i < tableCell.length; i++) {
        tableCell[i].addEventListener("mousedown", function (e) {
            coloring = true;
            e.target.style.backgroundColor = inputColor.value;
        });

        tableCell[i].addEventListener("mousemove", function (e) {
            if (coloring === true) {
                e.target.style.backgroundColor = inputColor.value;
            }
        });
        
        tableCell[i].addEventListener("mouseup", function (e) {
            if (coloring === true) {
                coloring = false;
            }
        })
    }
};


// Remove existing grid as determined by height and width input value
function removeGrid(){
    var existingTable = tableCanvas.firstElementChild;
    if (existingTable){
        tableCanvas.innerHTML = '';;
    }
  }

// Submit listener, create grid from user defined height and width 
inputGrid.addEventListener("submit", function (submit) {
    submit.preventDefault();
    makeGrid(inputHeight, inputWidth);
    addColor(inputColor);
});

// Reset listener, reset grid to blank and color to default black
inputGrid.addEventListener("reset", function () {
    removeGrid();
    inputColor.value = "#000000";
});
