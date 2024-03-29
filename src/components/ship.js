class Ship {
  constructor(len, name) {
    this.length = len;
    // WHERE SHIP HAS BEEN HIT
    this.hits = [];
    this.position = [];
    this.sunk = false;
    this.name = name;
    this.health = len;
  }

  hit(pos) {
    this.hits.push(pos);
    this.health--;
    this.isSunk();
  }

  isSunk() {
    if (this.health <= 0) {
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

  getName() {
    return this.name;
  }
}

export default Ship;
