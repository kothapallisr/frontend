// map
let arr = [2, 5, 6, 7, 7, 7, 8];
let newArr = [];

const newArray = arr.map((item) => {
  return item*2;
});

console.log(newArray);

// filter

const filtered = arr.filter( item => item>6);
console.log(filtered);

// find
const found = arr.find(item => item == 7);
console.log(found);

// reduce
const reduced = arr.reduce((accu, curr) => {
  return accu + curr;
}, 0);

console.log(`Sum of the numbers in array: ${reduced}`);