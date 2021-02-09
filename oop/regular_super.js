let Ball = function (ballType = "regular") {
  this.ballType = ballType;
};

let ball1 = new Ball("super");
let ball2 = new Ball();
console.log(ball1.ballType);
console.log(ball2.ballType);
