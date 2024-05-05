const generateGridBtn = document.getElementById("generateGridBtn");


generateGridBtn.addEventListener("click", function() {
    
    // Clear existing grid
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";
    
    // Prompt the user to enter the number of grid squares
    let rowSquares = parseInt(prompt("Enter the number of grid squares (1 - 100):"));

    while (rowSquares < 0 || rowSquares > 100) {
         rowSquares =  parseInt(prompt("ERROR! Please enter a valid number"));
         }

    // Create grid squares
    for (let i = 0; i < rowSquares * rowSquares; i++) {

        //gridItem = grid squares in a grid
        const gridItem = document.createElement("div");
        // set a style on grid squares on a grid sized 500px x 500px
        gridItem.setAttribute("style", "height: " + (500/rowSquares) + "px; width: " + (500/rowSquares) + "px;")
        gridItem.classList.add("grid-item");

        // Add mouseover event listener
        gridItem.addEventListener("mouseover", function() {
            gridItem.style.backgroundColor = "black";
        });

        gridContainer.appendChild(gridItem);
    }
});
