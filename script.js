// const GRID_LENGTH = 640;

const createGrid = function createGrid(size) {
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
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
};

const hover = function hover(node) {
  node.classList.add("colored");
};

const sizePrompt = function sizePrompt() {
  const size = Number.parseInt(prompt("Enter size:"));
  if (Number.isNaN(size)) {
    alert("That's not a number!");
  } else if (size < 1) {
    alert("That number is too small!");
  } else if (size > 64) {
    alert("That number is too big!");
  } else {
    createGrid(size);
  }
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", sizePrompt);
createGrid(16);

