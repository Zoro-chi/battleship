import Ai from "../src/components/ai.js";
import Player from "../src/components/player.js";

describe("AI test", () => {
  const ai = new Ai();
  const player = new Player("john");

  ai.board.aiShips.forEach((ship) => ai.board.randomPlaceShip(ship));
  player.board.allShips.forEach((ship) => player.board.randomPlaceShip(ship));

  ai.aiAttack(player);

  test("A.I", () => {
    expect(ai.getName()).toBe("A.I");
  });
});
