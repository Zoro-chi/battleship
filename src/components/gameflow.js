import Gameboard from "./gameboard.js";
import Player from "./player.js";
import Ship from "./ship.js";
import Ai from "./ai.js";

const initGame = () => {
  // INIT PLAYERS AND BOARDS
  const player = new Player("Kilo");
  // const enemy = new Player("Lima");
  const enemy = new Ai();

  // INIT SHIPS
  player.board.allShips.forEach((ship) => player.board.randomPlaceShip(ship));
  enemy.board.aiShips.forEach((ship) => enemy.board.randomPlaceShip(ship));

  // INIT LIVES
  player.board.lifeInit();
  enemy.board.lifeInit();

  // CHECK FOR GAMEOVER

  return {
    player,
    enemy,
  };
};

export default initGame;
