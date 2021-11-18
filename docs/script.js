const sketchboardDIV = document.querySelector(".sketchboard");
const boardSize = 16 ;

function createDiv() {
  const sketchCellDIV = document.createElement("div");
  sketchCellDIV.classList = "cell";

  sketchCellDIV.addEventListener("mouseover", () => {
    sketchCellDIV.classList = "cell cell-black";
  });

  return sketchCellDIV;
}

function createColumn() {
  let sketchColumnDIV = document.createElement("div");
  sketchColumnDIV.classList = "column";
  for (let i = 0; i < boardSize; i++) sketchColumnDIV.appendChild(createDiv());

  sketchboardDIV.appendChild(sketchColumnDIV);
}

for (let i = 0; i < boardSize; i++) createColumn();
