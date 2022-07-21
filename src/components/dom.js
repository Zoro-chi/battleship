import initGame from "./gameflow.js";

const domOps = () => {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");

  const pBoard = initGame().p1Board.getGameboard();
  const eBoard = initGame().p2Board.getGameboard();

  pBoard.forEach((posY, i) => {
    posY.forEach((posX, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-y", i);
      cell.setAttribute("data-x", j);
      playerBoard.appendChild(cell);
    });
  });

  eBoard.forEach((posY, i) => {
    posY.forEach((posX, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-y", i);
      cell.setAttribute("data-x", j);
      enemyBoard.appendChild(cell);
    });
  });
};

export default domOps;
