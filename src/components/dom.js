import initGame from "./gameflow.js";

const domOps = () => {
  const playerBoard = document.querySelector(".player-board");
  const enemyBoard = document.querySelector(".enemy-board");

  const pBoard = initGame().p1Board.getGameboard();
  const eBoard = initGame().p2Board.getGameboard();

  enemyBoard.style.backgroundColor = "blue";
};

export default domOps;
