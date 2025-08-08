function viewName() {
  const inputElement = document.querySelector('.js-input').value;
  const resultElement = document.querySelector('.js-p');
  resultElement.innerHTML = `Your name: ${inputElement}`;
}

function testOnKeyUp() {
  const inputElements = document.querySelector('.js-checkOnkeyUp').value;
  const resultElements = document.querySelector('.js-onKeyUp');
  resultElements.innerHTML = `${inputElements}`;
}