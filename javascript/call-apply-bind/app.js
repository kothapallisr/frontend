const john = {
  name: 'John',
  age: 33
};

function message(city, area) {
  console.log(`My name is ${this.name}, I'm ${this.age} years old and I live in ${city}, ${area}`);
}

const peter = {
  name: 'Peter',
  age: 35
}

// call() takes list of arguments and invokes the function
message.call(john, 'Berlin', 'Germany');
message.call(peter, 'Bay area', 'SF');

// apppy() takes array of arguments and invokes the function
message.apply(john, ['Berlin', 'Germany']);
message.apply(peter, ['Bay area', 'SF']);

// bind() takes list of arguments and returns a function
const msg = message.bind(john, 'Berlin', 'Germany');
msg();
const msg2 = message.bind(peter, 'Bay area', 'SF');
msg2();