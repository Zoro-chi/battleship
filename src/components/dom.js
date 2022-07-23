import initGame from "./gameflow.js";

const domOps = () => {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");

  const pBoard = initGame().p1Board;
  const eBoard = initGame().p2Board;

  let cell;

  pBoard.getGameboard().forEach((posY, i) => {
    posY.forEach((posX, j) => {
      cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-y", i);
      cell.setAttribute("data-x", j);
      playerBoard.appendChild(cell);
    });
  });

  eBoard.getGameboard().forEach((posY, i) => {
    posY.forEach((posX, j) => {
      cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-y", i);
      cell.setAttribute("data-x", j);
      enemyBoard.appendChild(cell);
    });
  });

  pBoard.aliveShips.forEach((ship) => {
    ship.position.forEach((coord) => {
      let cell = document.querySelectorAll(".cell");
      let y = coord[0];
      let x = coord[1];
      cell.forEach((pos) => {
        // if (
        // pos.getAttribute("data-y") == y &&
        //   pos.getAttribute("data-x") == x
        // ) {
        //   pos.style.backgroundColor = "red";
        // }
        coord = JSON.stringify([y, x]);
        if (coord == [pos.getAttribute("data-y"), pos.getAttribute("data-x")]) {
          pos.style.backgroundColor = "red";
        }
      });
    });
  });
};

export default domOps;
