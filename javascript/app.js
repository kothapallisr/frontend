// test truthy and falsy

// const text = ' ';
// if(text) {
//   console.log('Hey it\'s a truthy')
// } else {
//   console.log('Hey it\'s a falsy')
// }

// call back, higher order functions

// function goodMorning (name) {
//   return `Good morning! ${name}`;
// }

// // callback function which is an argument for the higher order function. 
// function goodEvening (name) {
//   return `Good evening! ${name}`;
// }

// // higher order function (which takes the callback function as parameter)
// const greet = function(name, cb) {
//   const myName = 'John';
//   const message = cb(name);
//   console.log(`${message}. My name is ${myName}`);
// }

// greet("Susan", goodMorning);
// greet("Carey", goodEvening);

let people = [
  {name: 'bob', position:'developer'},
  {name: 'tom', position:'designer'},
  {name: 'lam', position:'architect'},
]

//forEach
people.forEach(item => {
  console.log(item.position.toUpperCase())
})


