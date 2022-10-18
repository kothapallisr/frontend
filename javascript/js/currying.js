// currying using bind()

let multiply = function(x, y) {
  console.log(x * y);
}

let multiply2 = multiply.bind(this, 2)

multiply2(3)
multiply2(10)

// currying using closure

let multi = function(x) {
  return function(y){
    console.log(x * y)
  }
}


let multiply3  = multi(3)
multiply3(10);