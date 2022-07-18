import Gameboard from "../src/components/gameboard";
import Ship from "../src/components/ship";

describe("Gameboard tests", () => {
  const gameboard = new Gameboard();
  const board = gameboard.getGameboard();
  test("Gameboard creation", () => {
    expect(board[2][3]).toEqual({ shipName: undefined });
  });
  test("Placing ship", () => {
    const proto = new Ship(3, [
      [0, 0],
      [0, 1],
      [0, 2],
    ]);
    gameboard.placeShip(0, 0, proto, "h");
    expect(gameboard.getGameboard()[0][1]).toEqual({
      shipName: proto,
      shipIndex: 1,
    });
  });
});
