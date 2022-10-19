const body = document.body
const colorPara = document.querySelector('.color')
const colorBtn = document.querySelector('.switch')

colorBtn.addEventListener('click', function() {
  let red = getRandom()
  let blue = getRandom()
  let green = getRandom()
  let colorString = `rgb(${red}, ${blue}, ${green})`;
  colorPara.textContent = colorString;
  body.style.backgroundColor = colorString;
})

function getRandom() {
  return Math.floor(Math.random() * 256)
}