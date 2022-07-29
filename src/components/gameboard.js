import Ship from "./ship.js";

const allShips = {
  carrier: new Ship(5, "carrier"),
  battleship: new Ship(4, "battleship"),
  destroyer: new Ship(3, "destroyer"),
  submarine: new Ship(3, "submarine"),
  patrolboat: new Ship(2, "patrolboat"),
};
const aiShips = {
  carrier1: new Ship(5, "carrier1"),
  battleship1: new Ship(4, "battleship1"),
  destroyer1: new Ship(3, "destroyer1"),
  submarine1: new Ship(3, "submarine1"),
  patrolboat1: new Ship(2, "patrolboat1"),
};

const { carrier, battleship, destroyer, submarine, patrolboat } = allShips;

const { carrier1, battleship1, destroyer1, submarine1, patrolboat1 } = aiShips;

class Gameboard {
  constructor() {
    this.missedShots = [];
    this.hitShots = [];
    this.gameboardArr = this.createGameboard();
    this.allShips = [carrier, battleship, destroyer, submarine, patrolboat];
    this.aiShips = [carrier1, battleship1, destroyer1, submarine1, patrolboat1];
    this.aliveShips = [];
    this.sunkShips = [];
    this.life = 0;
    this.gameover = false;
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
    let ans;
    if (direction == "v") {
      if (this.validPlacement(y, x, ship.getLength(), direction)) {
        for (let i = 0; i < ship.getLength(); i++) {
          this.gameboardArr[y + i][x].shipName = ship.getName();
          this.gameboardArr[y + i][x].shipIndex = i;
          ship.position.push([y + i, x]);
        }
        this.aliveShips.push(ship);
        ans = true;
      } else {
        ans = false;
      }
      return ans;
    }

    if (direction == "h") {
      let ans;
      if (this.validPlacement(y, x, ship.getLength(), direction)) {
        for (let i = 0; i < ship.getLength(); i++) {
          this.gameboardArr[y][x + i].shipName = ship.getName();
          this.gameboardArr[y][x + i].shipIndex = i;
          ship.position.push([y, x + i]);
        }
        this.aliveShips.push(ship);
        ans = true;
      } else {
        ans = false;
      }
      return ans;
    }
    this.lifeInit();
  }

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
    if (this.placeShip(y, x, ship, direction) === false) {
      this.randomPlaceShip(ship);
    } else {
      return;
    }
  };

  receiveAttack(y, x) {
    let name = this.gameboardArr[y][x].shipName;
    let missed = JSON.stringify(this.missedShots);
    let hits = JSON.stringify(this.hitShots);
    let ans;
    if (
      missed.includes([JSON.stringify(y), JSON.stringify(x)]) ||
      hits.includes([JSON.stringify(y), JSON.stringify(x)])
    ) {
      ans = false;
      // alert("already shot");
    } else {
      if (name == undefined) {
        this.missedShots.push([y, x]);
        ans = true;
      } else {
        const target = this.aliveShips.filter((ship) => {
          return ship.name === name;
        })[0];

        target.hit([y, x]);
        this.hitShots.push([y, x]);
        this.life -= 1;
        this.checkGameover();
        ans = true;
      }
      this.shipsAlive();
    }
    return ans;
  }

  getMissedShots() {
    return this.missedShots;
  }

  shipsAlive = () => {
    this.aliveShips.forEach((ship) => {
      if (ship.sunk) {
        const index = this.aliveShips.indexOf(ship);
        this.aliveShips.splice(index, 1);
        this.sunkShips.push(ship);
      }
    });
  };

  lifeInit = () => {
    this.aliveShips.forEach((ship) => {
      this.life += ship.health;
    });
    return this.life;
  };

  checkGameover = () => {
    if (this.life <= 0) {
      this.gameover = true;
    }
  };
}

export default Gameboard;
