import Ship from "./ship.js";

class Gameboard {
  constructor() {
    this.missedShots = [];
    this.gameboardArr = this.createGameboard();
  }
  createGameboard() {
    let array = [];
    let arrayItem = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arrayItem.push({ shipName: undefined, shipIndex: undefined });
      }
      array.push(arrayItem);
      arrayItem = [];
    }
    return array;
  }
  getGameboard() {
    return this.gameboardArr;
  }
  validPlacement(x, y, length, direction) {
    if (this.gameboardArr[x][y]) {
      return false;
    }
    if (direction == "v") {
      if (x > 10 || x < 0 || y > 10 || y < 0 || y + length > 10) {
        return false;
      } else {
        for (let i = y; i < y + length; i++) {
          if (this.gameboardArr[i][x].shipName != undefined) {
            return false;
          }
        }
        return true;
      }
    }
    if (direction == "h") {
      if (x > 10 || x < 0 || y > 10 || y < 0 || x + length > 10) {
        return false;
      } else {
        for (let i = x; i < x + length; i++) {
          if (this.gameboardArr[y][i].shipName != undefined) {
            return false;
          }
        }
        return true;
      }
    }
  }
  placeShip(x, y, ship, direction) {
    if (direction == "v") {
      if (this.validPlacement(x, y, ship.getLength(), direction)) {
        for (let i = 0; i < ship.getLength(); i++) {
          this.gameboardArr[y + i][x].shipName = ship;
          this.gameboardArr[y + i][x].shipIndex = i;
        }
      }
    }
    if (direction == "h") {
      if (this.validPlacement(x, y, ship.getLength(), direction)) {
        for (let i = 0; i < ship.getLength(); i++) {
          this.gameboardArr[y][x + i].shipName = ship;
          this.gameboardArr[y][x + i].shipIndex = i;
        }
      }
    }
  }
  receiveAttack(x, y) {
    if (this.gameboardArr[y][x].shipName == undefined) {
      this.missedShots.push({ x: x, y: y });
    } else {
      this.gameboardArr[y][x].shipName.hit(this.gameboardArr[y][x].shipIndex);
    }
  }
  getMissedAhots() {
    return this.missedShots;
  }
}

export default Gameboard;
