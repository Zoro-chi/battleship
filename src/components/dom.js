import initGame from "./gameflow.js";
import Player from "./player.js";

const domOps = () => {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");
  const modal = document.querySelector("#modal");
  const winner = document.querySelector(".winning-player");
  let playerLivesLeft = document.querySelector(".player-lives-left");
  let enemyLivesLeft = document.querySelector(".enemy-lives-left");

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
          // pos.style.backgroundColor = "red";
          pos.classList.add("player-ship-cell");
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
          // pos.style.backgroundColor = "blue";
          pos.classList.add("enemy-ship-cell");
        }
      });
    });
  });

  // console.log(player.board.life);
  // console.log(enemy.board.life);
  playerLivesLeft.textContent = player.board.life;
  enemyLivesLeft.textContent = enemy.board.life;

  // DISPLAYING ATTACKS
  document.querySelectorAll(".enemy").forEach((cell) => {
    cell.addEventListener("click", () => {
      const y = cell.getAttribute("data-y");
      const x = cell.getAttribute("data-x");

      if (player.attack(y, x, enemy)) {
        cell.setAttribute("id", "shot");
        enemyLivesLeft.textContent = enemy.board.life;
        if (enemy.board.gameover) {
          modal.style.display = "flex";
        }
        // console.log(enemy.board.missedShots);
      } else {
        return;
      }

      const { aiY, aiX } = enemy.aiAttack(player);
      // console.log(player.board.missedShots);

      document.querySelectorAll(".player").forEach((cell) => {
        const y = cell.getAttribute("data-y");
        const x = cell.getAttribute("data-x");
        if (y == aiY && x == aiX) {
          cell.setAttribute("id", "shot");
          playerLivesLeft.textContent = player.board.life;
          if (player.board.gameover) {
            modal.style.display = "flex";
          }
        }
      });
    });
  });
};

export default domOps;
