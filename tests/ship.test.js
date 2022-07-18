import Ship from "../src/components/ship.js";

describe("Ship tests", () => {
  const shipA = new Ship(2);
  shipA.position = [
    [0, 0],
    [0, 1],
  ];
  const shipB = new Ship(4);
  shipB.position = [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ];

  test("Creation of ship and length", () => {
    expect(shipA.getLength()).toBe(2);
  });
  test("Ship position", () => {
    expect(shipB.getPosition()).toEqual([
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ]);
  });
  test("Ship hit", () => {
    shipA.hit([0, 1]);
    shipA.hit([0, 2]);
    expect(shipA.hits).toEqual([[0, 1]]);
  });
  test("Sunk", () => {
    shipB.hit([1, 0]);
    shipB.hit([2, 0]);
    shipB.hit([3, 0]);
    shipB.hit([4, 0]);
    console.log(shipB.hits);
    console.log(shipB.isSunk());
    expect(shipB.isSunk()).toBe(true);
  });
});
