import Gameboard from "./gameboard.js";
import Player from "./player.js";
import Ship from "./ship.js";

const initGame = () => {
  // INIT PLAYERS AND BOARDS
  const player = new Player("Kilo");
  const enemy = new Player("Lima");

  // INIT SHIPS
  player.board.allShips.forEach((ship) => player.board.randomPlaceShip(ship));
  enemy.board.aiShips.forEach((ship) => enemy.board.randomPlaceShip(ship));

  return {
    player,
    enemy,
  };
};

export default initGame;
