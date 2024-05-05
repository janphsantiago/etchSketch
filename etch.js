const generateGridBtn = document.getElementById("generateGridBtn");


generateGridBtn.addEventListener("click", function() {
    // Prompt the user to enter the number of grid squares
    const rowSquares = parseInt(prompt("Enter the number of grid squares (e.g., 16 for a 16x16 grid):"));
    // Clear existing grid
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";

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
