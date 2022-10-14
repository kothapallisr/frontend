const fullImg = document.querySelector('.full-img');
const smallImgs = document.querySelectorAll('.gallery img');
console.log(smallImgs);
const modal = document.querySelector('.modal');

smallImgs.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.classList.add('open');
    fullImg.classList.add('open');

    const originalQuality = img.getAttribute('alt');
    fullImg.src = `img/full/${originalQuality}.jpg`;
  });
});
modal.addEventListener('click', function(e) {
  if(e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    fullImg.classList.remove('open');
  }
})
