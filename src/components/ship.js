class Ship {
  constructor(len, pos) {
    this.length = len;
    // WHERE SHIP HAS BEEN HIT
    this.hits = [];
    this.position = pos;
    this.sunk = false;
  }
  hit(pos) {
    if (this.position.includes(pos)) {
      const index = this.position.indexOf(pos);
      this.position.splice(index, 1, "X");
      this.hits.push(pos);
    }
  }
  isSunk() {
    if (this.hits.length == this.length) {
      this.sunk = true;
      return this.sunk;
    } else {
      return this.sunk;
    }
  }
  getLength() {
    return this.length;
  }
  getPosition() {
    return this.position;
  }
}

export default Ship;
