const burger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  if (burger.classList.contains('active')) {
    nav.style.display = ('block')
  } else {
    nav.style.display = ('none')
  }
})

