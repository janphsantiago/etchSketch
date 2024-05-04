const gridContainer = document.getElementById("gridContainer");

// Create 16x16 grid squares
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    // Change background color on mouseover
    gridItem.addEventListener("mouseover", function() {
        gridItem.style.backgroundColor = "black"; 
    });

    gridContainer.appendChild(gridItem);

}


