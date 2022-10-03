const createGrid = function createGrid(size) {
  const container = document.querySelector(".container");
  for (let i = 0; i < size; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < size; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("gridSquare");
      gridSquare.addEventListener("mouseover", function(e){hover(e.target)});
      rowDiv.appendChild(gridSquare);
    }
    container.appendChild(rowDiv);
  }
}

const hover = function hover(node) {
  node.classList.add("colored");
}

createGrid(16);

