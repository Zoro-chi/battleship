import Ship from "./ship";

const allShips = {
  carrier: new Ship(5, "carrier"),
  battleship: new Ship(4, "battleship"),
  destroyer: new Ship(3, "destroyer"),
  submarine: new Ship(3, "submarine"),
  patrolboat: new Ship(2, "patrolboat"),
};

const { carrier, battleship, destroyer, submarine, patrolboat } = allShips;

class Gameboard {
  constructor() {
    this.missedShots = [];
    this.gameboardArr = this.createGameboard();
    this.allShips = [carrier, battleship, destroyer, submarine, patrolboat];
    this.aliveShips = [];
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
  validPlacement(y, x, length, direction) {
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
  placeShip(y, x, ship, direction) {
    if (direction == "v") {
      if (this.validPlacement(y, x, ship.getLength(), direction)) {
        for (let i = 0; i < ship.getLength(); i++) {
          this.gameboardArr[y + i][x].shipName = ship.getName();
          this.gameboardArr[y + i][x].shipIndex = i;
          ship.position.push([y + i, x]);
        }
        this.aliveShips.push(ship);
      } else {
        return false;
      }
    }
    if (direction == "h") {
      if (this.validPlacement(y, x, ship.getLength(), direction)) {
        for (let i = 0; i < ship.getLength(); i++) {
          this.gameboardArr[y][x + i].shipName = ship.getName();
          this.gameboardArr[y][x + i].shipIndex = i;
          ship.position.push([y, x + i]);
        }
        this.aliveShips.push(ship);
      } else {
        return false;
      }
    }
  }

  receiveAttack(y, x) {
    let name = this.gameboardArr[y][x].shipName;
    if (name == undefined) {
      this.missedShots.push([y, x]);
    } else {
      const target = this.aliveShips.filter((ship) => {
        return ship.name === name;
      })[0];
      target.hit([y, x]);
    }
    this.shipsAlive();
  }

  getMissedShots() {
    return this.missedShots;
  }

  shipsAlive = () => {
    this.aliveShips.forEach((ship) => {
      if (ship.sunk) {
        const index = this.aliveShips.indexOf(ship);
        this.aliveShips.splice(index, 1);
      }
    });
  };

  generateVars = () => {
    let y = Math.floor(Math.random() * 10);
    let x = Math.floor(Math.random() * 10);
    let direction;
    if (Math.floor(Math.random() * 2) === 0) {
      direction = "v";
    } else {
      direction = "h";
    }
    return { y, x, direction };
  };

  randomPlaceShip = (ship) => {
    const { y, x, direction } = this.generateVars();
    let retry = true;
    while (retry === true) {
      if (this.placeShip(y, x, ship, direction) != false) {
        retry = false;
      }
    }
  };
}

export default Gameboard;
