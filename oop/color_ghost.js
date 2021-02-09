var Ghost = function () {
  let colors = ["yellow", "red", "blue", "green"];
  let random = Math.round(Math.random() * 4);
  this.color = colors[random];
};

let a = new Ghost();
console.log(a.color);
