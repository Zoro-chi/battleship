class Ship {
  constructor(len) {
    this.length = len;
    // WHERE SHIP HAS BEEN HIT
    this.hits = [];
    this.position = [];
    this.sunk = false;
  }

  hit(pos) {
    let position = JSON.stringify(this.getPosition());
    let coord = JSON.stringify(pos);
    if (position.includes(coord)) {
      this.hits.push(pos);
    }
  }

  isSunk() {
    if (this.hits.length == this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }

  getLength() {
    return this.length;
  }

  getPosition() {
    return this.position;
  }
}

export default Ship;
