// for(let i=0; i<=6; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i*1000)
// }

// for(var i=0; i<=6; i++) {
//   (function() {
//     var j = i;
//     setTimeout(function() {
//     console.log(j);
//   }, j*1000) 
// })()
// }

for(var i=0; i<=6; i++) {
  (function(j) {
    setTimeout(function() {
    console.log(j);
  }, j*1000) 
})(i)
}