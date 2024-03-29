import Gameboard from "./gameboard.js";
import Player from "./player.js";
import Ai from "./ai.js";

const initGame = () => {
  // INIT PLAYERS AND BOARDS
  const player = new Player("");
  // const enemy = new Player("Lima");
  const enemy = new Ai();

  // INIT SHIPS
  player.board.allShips.forEach((ship) => player.board.randomPlaceShip(ship));
  enemy.board.aiShips.forEach((ship) => enemy.board.randomPlaceShip(ship));

  // INIT LIVES
  player.board.lifeInit();
  enemy.board.lifeInit();

  return {
    player,
    enemy,
  };
};

export default initGame;
