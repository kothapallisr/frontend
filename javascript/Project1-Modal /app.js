const openBtn = document.querySelector('.open');
const modalContainer = document.querySelector('.modal-container');
const modalBtn = document.querySelector('.modal');

openBtn.addEventListener('click', function() {
  modalContainer.classList.add('show');
})
modalBtn.addEventListener('click', function() {
  modalContainer.classList.remove('show')
})