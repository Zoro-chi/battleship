import Player from "../src/components/player";

describe("Player tests", () => {
  const golf = new Player("golf");
  const hotel = new Player("hotel");

  test("New player creation (Name)", () => {
    expect(golf.getName()).toBe("golf");
  });

  test("New player creation (Turn)", () => {
    expect(golf.getTurn()).toBe(true);
  });

  test("Start player turn", () => {
    expect(hotel.startTurn()).toBeTruthy();
  });

  test("End player turn", () => {
    hotel.endTurn(golf);

    expect(hotel.getTurn()).toBeFalsy();
    expect(golf.getTurn()).toBeTruthy();
  });

  test("Attack enemy", () => {
    const enemyBoard = hotel.board;
    golf.attack(4, 4, hotel);

    expect(enemyBoard.missedShots).toEqual([[4, 4]]);
  });
});
