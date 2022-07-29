import initGame from "./gameflow.js";
import Player from "./player.js";

const domOps = () => {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");
  const gameoverModal = document.querySelector("#gameover-modal");
  const startModal = document.querySelector("#start-modal");
  const startGame = document.querySelector(".start-game");
  const winner = document.querySelector(".winner");
  let playerLivesLeft = document.querySelector(".player-lives-left");
  let enemyLivesLeft = document.querySelector(".enemy-lives-left");
  const boardsContainer = document.querySelector("#boards");
  const playerBoardName = document.querySelector(".player-board-container");
  const playerName = document.querySelector("#player-name");

  const { player, enemy } = initGame();
  player.setName(playerName.value);

  startGame.addEventListener("click", () => {
    player.setName(playerName.value);
    playerBoardName.innerHTML = player.getName();
    startModal.style.display = "none";
  });

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
          pos.classList.add("enemy-ship-cell");
        }
      });
    });
  });

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
          winner.textContent = `The winner is player`;
          gameoverModal.style.display = "flex";
          boardsContainer.style.opacity = "0.5";
        }
        // console.log(enemy.board.missedShots);
      } else {
        return;
      }

      enemy.aiAttack(player);

      document.querySelectorAll(".player").forEach((cell) => {
        const y = cell.getAttribute("data-y");
        const x = cell.getAttribute("data-x");
        enemy.allShots.forEach((shot) => {
          if (y == shot.y && x == shot.x) {
            cell.setAttribute("id", "shot");
            playerLivesLeft.textContent = player.board.life;
            if (player.board.gameover) {
              winner.textContent = `The winner is enemy`;
              gameoverModal.style.display = "flex";
              boardsContainer.style.opacity = "0.5";
            }
          }
        });
      });
    });
  });
};

export default domOps;
