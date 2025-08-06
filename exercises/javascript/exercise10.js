function toggling () {
  const gaming = document.querySelector('.js-toggleButton')

  if (!gaming.classList.contains('not-toggled')) {
    gaming.classList.add('not-toggled')
  } else {
    gaming.classList.remove('not-toggled')
  }
}
