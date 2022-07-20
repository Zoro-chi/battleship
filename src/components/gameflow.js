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
  const p1Ships = {
    carrier: new Ship(5, "carrier"),
    battleship: new Ship(4, "battleship"),
    destroyer: new Ship(3, "destroyer"),
    submarine: new Ship(3, "submarine"),
    patrolboat: new Ship(2, "patrolboat"),
  };
  const p2Ships = {
    carrier: new Ship(5, "carrier"),
    battleship: new Ship(4, "battleship"),
    destroyer: new Ship(3, "destroyer"),
    submarine: new Ship(3, "submarine"),
    patrolboat: new Ship(2, "patrolboat"),
  };

  //   PLACE SHIPS ON RESPECTIVE GAMEBOARD
  p1Board.placeShip(0, 0, p1Ships.carrier, "v");
  p1Board.placeShip(3, 3, p1Ships.battleship, "h");
  p1Board.placeShip(4, 7, p1Ships.destroyer, "h");
  p1Board.placeShip(6, 5, p1Ships.submarine, "v");
  p1Board.placeShip(0, 5, p1Ships.patrolboat, "h");

  p2Board.placeShip(0, 0, p1Ships.carrier, "v");
  p2Board.placeShip(3, 3, p1Ships.battleship, "h");
  p2Board.placeShip(4, 7, p1Ships.destroyer, "h");
  p2Board.placeShip(6, 5, p1Ships.submarine, "v");
  p2Board.placeShip(0, 5, p1Ships.patrolboat, "h");

  //   console.log(p1Board.aliveShips[0].position);
  //   console.log(p2Board.aliveShips[0].position[0]);
  return {
    p1Board,
    p2Board,
  };
};

export default initGame;
