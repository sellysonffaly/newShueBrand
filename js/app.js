const modal = document.querySelector('.modal')
const cross = document.querySelector('.cross')
const btns = document.querySelectorAll('.btn')


btns.forEach(function(btn) {
 btn.addEventListener('click', () => {
  modal.classList.add('active')
 })
})

cross.addEventListener('click', () => {
 modal.classList.remove('active')
})