import Gameboard from "./gameboard.js";
import Player from "./player.js";
import Ship from "./ship.js";

const initGame = () => {
  // INIT PLAYERS
  const p1 = new Player("Kilo");
  const p2 = new Player("Lima");

  //   INIT BOARDS
  const p1Board = p1.board;
  const p2Board = p2.board;

  // INIT SHIPS
  p1Board.allShips.forEach((ship) => p1Board.randomPlaceShip(ship));
  p2Board.allShips.forEach((ship) => p2Board.randomPlaceShip(ship));

  // p1Board.aliveShips.forEach((ship) => {
  //   return console.log(ship.position);
  // });
  // console.log(p2Board.aliveShips);

  return {
    p1Board,
    p2Board,
  };
};

export default initGame;
