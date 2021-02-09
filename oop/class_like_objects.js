// prototype
function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.toString = function () {
  return `${this.name} is a ${this.type}`;
};

let a = new Animal("Rocky", "Dog");
a.toString();

// class
class Animal {
  constructor(name, type) {
    this.name = name;
    this.typw = type;
  }

  toString() {
    return `${this.name} is a ${this.typw}`;
  }
}

let c = new Animal("Tom", "Cat");
c.toString();
