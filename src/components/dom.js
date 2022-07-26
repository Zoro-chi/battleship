import initGame from "./gameflow.js";
import Player from "./player.js";

const domOps = () => {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");

  const { player, enemy } = initGame();

  // CREATING CELLS FOR BOTH GAMEBOARDS
  player.board.getGameboard().forEach((posY, i) => {
    posY.forEach((posX, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add("player");
      cell.setAttribute("data-y", i);
      cell.setAttribute("data-x", j);
      playerBoard.appendChild(cell);
    });
  });

  enemy.board.getGameboard().forEach((posY, i) => {
    posY.forEach((posX, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add("enemy");
      cell.setAttribute("data-y", i);
      cell.setAttribute("data-x", j);
      enemyBoard.appendChild(cell);
    });
  });

  // MARKING PLACED SHIPS ON BOTH BOARDS
  player.board.aliveShips.forEach((ship) => {
    ship.position.forEach((coord) => {
      let cell = document.querySelectorAll(".player");
      let y = coord[0];
      let x = coord[1];
      cell.forEach((pos) => {
        if (
          pos.getAttribute("data-y") == y &&
          pos.getAttribute("data-x") == x
        ) {
          pos.style.backgroundColor = "red";
        }
      });
    });
  });

  enemy.board.aliveShips.forEach((ship) => {
    ship.position.forEach((coord) => {
      let cell = document.querySelectorAll(".enemy");
      let y = coord[0];
      let x = coord[1];
      cell.forEach((pos) => {
        if (
          pos.getAttribute("data-y") == y &&
          pos.getAttribute("data-x") == x
        ) {
          pos.style.backgroundColor = "blue";
        }
      });
    });
  });

  // ADDING EVENT LISTENER TO GAMEBOARDS
  document.querySelectorAll(".player").forEach((cell) => {
    cell.addEventListener("click", () => {
      const y = cell.getAttribute("data-y");
      const x = cell.getAttribute("data-x");
      console.log(y, x);
      enemy.attack(y, x, player);
      console.log(player.board.missedShots);
    });
  });

  document.querySelectorAll(".enemy").forEach((cell) => {
    cell.addEventListener("click", () => {
      const y = cell.getAttribute("data-y");
      const x = cell.getAttribute("data-x");
      console.log(y, x);
      player.attack(y, x, enemy);
      console.log(enemy.board.missedShots);
    });
  });
};

export default domOps;
