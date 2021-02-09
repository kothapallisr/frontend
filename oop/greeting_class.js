class Person {
  constructor(name) {
    this.name = name;
  }

  greet(targetName) {
    return `Hello ${targetName}, my name is ${this.name}`;
  }
}

let a = new Person("Sru");
console.log(a.greet("Jyo"));
