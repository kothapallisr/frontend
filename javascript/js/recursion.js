// sum(1)(2)(3)(4)
let sum = function(a) {
  return function(b) {
    if(b) {
      return sum(a+b)
    }
    return a;
  }
}
console.log(sum(1)(2)(3)(4)())

// using arrow function

let sumArrow = a => b => b ? sumArrow(a + b) : a

console.log(sumArrow(10)(1)(2)(3)(4)(5)())