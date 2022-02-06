const john = {
  name: 'John',
  age: 33
};

function message() {
  console.log(`My name is ${this.name} and I'm ${this.age} years old`);
}

const peter = {
  name: 'Peter',
  age: 35
}

