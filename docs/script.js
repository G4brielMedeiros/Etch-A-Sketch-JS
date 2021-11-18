const sketchboardDIV = document.getElementById("sketchboard");
const clearButtonDIV = document.getElementById("clear");
const defaultBoardSize = 16;

function createCell() {
  const sketchCellDIV = document.createElement("div");
  sketchCellDIV.classList = "cell";

  sketchCellDIV.addEventListener("mouseover", () => {
    sketchCellDIV.classList = "cell cell-black";
  });

  return sketchCellDIV;
}

function createColumn(boardSize) {
  let sketchColumnDIV = document.createElement("div");
  sketchColumnDIV.classList = "column";
  for (let i = 0; i < boardSize; i++) sketchColumnDIV.appendChild(createCell());

  sketchboardDIV.appendChild(sketchColumnDIV);
}

function createSketchBoard(boardSize) {
  for (let i = 0; i < boardSize; i++) createColumn(boardSize);
}

function getUserBoardSize() {
  let boardSize = Number(prompt("What size will the new board be? (1...100)"));

  while (boardSize < 0 || boardSize > 100) {
    console.log({ newsize: boardSize });
    boardSize = Number(prompt("Please enter a number from 1 to 100."));
  }

  return boardSize;
}

function clearBoard() {
  sketchboardDIV.innerHTML = "";

  const newBoardSize = getUserBoardSize();

  createSketchBoard(newBoardSize);
}

clearButtonDIV.addEventListener("click", clearBoard);

createSketchBoard(defaultBoardSize);
