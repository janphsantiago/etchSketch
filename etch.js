const generateGridBtn = document.getElementById("generateGridBtn");
const eraserBtn = document.getElementById("eraser");
const penBtn = document.getElementById("pen");
const colorBtn = document.getElementById("color");

let mode = "color";

generateGridBtn.addEventListener("click", function() {


    // Clear existing grid
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";
    
    let rowSquares = parseInt(prompt("Enter the number of grid squares (1 - 100):"));
   
    // Loop to enter a valid number 1- 100
    while (rowSquares < 0 || rowSquares > 100) {
         rowSquares =  parseInt(prompt("ERROR! Please enter a valid number"));
         }

    // Create grid squares
    for (let i = 0; i < rowSquares * rowSquares; i++) {

        //gridItem = grid squares in a grid
        const gridItem = document.createElement("div");
        // set a style on grid squares on a grid sized 650 x 650
        gridItem.setAttribute("style", "height: " + (650/rowSquares) + "px; width: " + (650/rowSquares) + "px;")
        gridItem.classList.add("grid-item");

        // Add mouseover event listener
        gridItem.addEventListener("mouseover", function() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            if (mode == "color"){
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
            gridItem.style.backgroundColor = color;
            }
            else if (mode == "eraser"){
                gridItem.style.backgroundColor = "";
            }
            else if (mode == "pen"){
                gridItem.style.backgroundColor = "black";
            }
        });

        gridContainer.appendChild(gridItem);
    }

    colorBtn.addEventListener("click", function () {
        mode = "color";
    });
    eraserBtn.addEventListener("click", function () {
        mode = "eraser";
    });
    penBtn.addEventListener("click", function () {
        mode = "pen";
    });
});
