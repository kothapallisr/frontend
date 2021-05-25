var i = 1;
const timing = setInterval(function () {
  console.log("Here is message number " + i);
  i = i + 1;
  if (i == 6) {
    clearInterval(timing);
  }
}, 2000);
