function Person(name) {
  this.name = name;
}

Person.prototype.greet = function (targetName) {
  return `Hello ${targetName}, my name is ${this.name}`;
};

let me = new Person("Sri");
console.log(me.greet("Suhas"));
