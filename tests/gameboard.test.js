import Gameboard from "../src/components/gameboard";
import Ship from "../src/components/ship";

describe("Gameboard tests", () => {
  const gameboard = new Gameboard();
  const board = gameboard.getGameboard();
  test("Gameboard creation", () => {
    expect(board[2][3]).toEqual({ shipName: undefined });
  });
  test("Placing ship vertically", () => {
    const proto = new Ship(3, "proto");
    gameboard.placeShip(0, 0, proto, "v");
    expect(gameboard.getGameboard()[0][0]).toEqual({
      shipName: proto.getName(),
      shipIndex: 0,
    });
  });
  test("Placing ship horizontally", () => {
    const beta = new Ship(2, "beta");
    gameboard.placeShip(5, 6, beta, "h");
    expect(gameboard.getGameboard()[5][7]).toEqual({
      shipName: beta.getName(),
      shipIndex: 1,
    });
  });
  test("Receiving an attack", () => {
    const alpha = new Ship(3, "alpha");
    gameboard.placeShip(4, 4, alpha, "v");
    gameboard.receiveAttack(6, 4, alpha);
    gameboard.receiveAttack(5, 4, alpha);

    expect(alpha.hits).toEqual([
      [6, 4],
      [5, 4],
    ]);
  });
  test("Missed shots", () => {
    const charlie = new Ship(4, "charlie");
    gameboard.placeShip(7, 0, charlie, "h");
    gameboard.receiveAttack(7, 0, charlie);
    gameboard.receiveAttack(7, 1, charlie);
    gameboard.receiveAttack(8, 4, charlie);
    gameboard.receiveAttack(3, 5, charlie);

    expect(gameboard.getMissedShots()).toEqual([
      [8, 4],
      [3, 5],
    ]);
  });
  test("Alive ships", () => {
    const gameBoard1 = new Gameboard();
    const delta = new Ship(1, "delta");
    const echo = new Ship(1, "echo");
    const foxtrot = new Ship(1, "foxtrot");
    gameBoard1.placeShip(2, 5, delta, "v");
    gameBoard1.placeShip(5, 6, echo, "h");
    gameBoard1.placeShip(7, 6, foxtrot, "h");
    gameBoard1.receiveAttack(5, 6, echo);

    gameBoard1.aliveShips.forEach((ship) => {
      console.log(ship.name);
    });

    expect(gameBoard1.aliveShips).toEqual([delta, foxtrot]);
  });
});
