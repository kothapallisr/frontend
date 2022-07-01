const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();


function hello(name) {
  console.log(`Hello ${name}`);
}

hello('Sridhar')

console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`)