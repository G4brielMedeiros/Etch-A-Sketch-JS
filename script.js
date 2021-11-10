const sketchboardDIV = document.querySelector(".sketchboard");

function createDiv() {
  const sketchCellDIV = document.createElement("div");
//sketchCellDIV.innerText = "foo";
  sketchCellDIV.classList = "cell";
  return sketchCellDIV;
}

function createColumn() {
  let sketchColumnDIV = document.createElement("div");
  sketchColumnDIV.classList = "column";
  for (let i = 0; i < 16; i++) sketchColumnDIV.appendChild(createDiv());

  sketchboardDIV.appendChild(sketchColumnDIV);
}

for (let i = 0; i < 16; i++) createColumn();
