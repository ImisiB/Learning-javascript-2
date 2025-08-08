function toggleButton(toggler) {
  const button = document.querySelector(toggler);
  if (!button.classList.contains('is-toggled')) {
  
  turnOffPreviousButton();
  
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}

function calculateButton() {
  let value = document.querySelector('.js-valueButton').value; 
  let classChanging = document.querySelector('.js-valueAnswer');
  if (value < 0) {
    classChanging.innerHTML = 'Error: Cost cannot be less than $0';
    classChanging.classList.add('error');
  } else{
    classChanging.innerHTML = value;
    classChanging.classList.remove('error');
  }
}