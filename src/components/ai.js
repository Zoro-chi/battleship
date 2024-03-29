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
      this.allShots.forEach((shot) => {
        while (shot.y == aiY && shot.x == aiX) {
          aiY = Math.floor(Math.random() * 10);
          aiX = Math.floor(Math.random() * 10);
        }
      });

      if (player.board.receiveAttack(aiY, aiX)) {
        this.allShots.push({ x: aiX, y: aiY });
        // console.log(this.allShots);
        this.endTurn(player);
      } else {
        this.startTurn();
        this.aiAttack(player);
      }
    }
  }
}

export default Ai;
