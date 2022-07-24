import Gameboard from "./gameboard.js";

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard(name);
    this.turn = false;
  }

  getName() {
    return this.name;
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
    if (this.getTurn()) {
      enemy.board.receiveAttack(y, x);
      this.endTurn(enemy);
    }
  }
}

export default Player;
