import Player from "./player.js";

class Ai extends Player {
  constructor() {
    super();
    this.name = "A.I";
    this.turn = false;
    this.allShots = [];
  }

  aiAttack(player) {
    let aiY = Math.floor(Math.random() * 10);
    let aiX = Math.floor(Math.random() * 10);

    if (this.getTurn()) {
      if (!this.allShots.includes({ x: aiX, y: aiY })) {
        player.board.receiveAttack(aiY, aiX);
        this.allShots.push({ x: aiX, y: aiY });
        this.endTurn(player);
      } else {
        this.aiAttack(player);
      }
    } else {
      return;
    }
    return { aiY, aiX };
  }
}

export default Ai;
