import Gameboard from "./gameboard.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
    this.turn = true;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getTurn() {
    return this.turn;
  }

  startTurn() {
    if (this.turn === false) {
      this.turn = true;
    }
    return this.turn;
  }

  endTurn(enemy) {
    if (this.turn === true) {
      this.turn = false;
      enemy.startTurn();
    }
  }

  attack(y, x, enemy) {
    let ans;
    if (this.getTurn()) {
      if (enemy.board.receiveAttack(y, x)) {
        this.endTurn(enemy);
        ans = true;
      } else {
        ans = false;
      }
    }
    return ans;
  }
}

export default Player;
