import Ship from "../src/components/ship.js";

describe("Ship tests", () => {
  const shipA = new Ship(2, [1, 2, 3]);
  const shipB = new Ship(4, [4, 5, 6, 9]);

  test("Creation of ship and length", () => {
    expect(shipA.getLength()).toBe(2);
  });
  test("Ship position", () => {
    expect(shipB.getPosition()).toEqual([4, 5, 6, 9]);
  });
  test("Ship hit", () => {
    shipA.hit(2);
    expect(shipA.hits).toContain(2);
  });
  test("Sunk", () => {
    shipB.hit(6);
    shipB.hit(4);
    shipB.hit(5);
    shipB.hit(9);
    expect(shipB.isSunk()).toBe(true);
  });
});
