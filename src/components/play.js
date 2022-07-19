class help {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  sayHi() {
    return this.name + "hi";
  }
}

const me = new help("jr");
me.getName().sayHi();
