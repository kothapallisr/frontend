const progressDone = document.querySelector('.progress-done')
setTimeout(() => {
  const data = progressDone.getAttribute('data-done') + '%'
  progressDone.style.width = data
  progressDone.style.opacity = 1
  progressDone.textContent = data
}, 1000);