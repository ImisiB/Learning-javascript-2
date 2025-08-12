const runTwice = function1 => {
  console.log(function1);
  console.log(function1);
}

runTwice(function() {console.log('12b')})

const add = () => {
  console.log(5)
}



runTwice(add)

document.querySelector('.js-button')
  .addEventListener('click', () => {
    clickButton();
  })


  document.querySelector('.js-button2')
  .addEventListener('click', () => {
    clickButton2();
  })

  document.querySelector('.js-add')
  .addEventListener('click', () => {
    messages++;
  })

  document.querySelector('.js-add2')
  .addEventListener('click', () => {
    messages--;
  })


const clickButton = () => {
  const button = document.querySelector('.js-button')

  button.innerHTML = 'Loading...'

  setTimeout(function() {button.innerHTML = 'Finished'}, 1000)
}

const clickButton2 = () => {
  const button = document.querySelector('.js-button2');

  const pTag = document.querySelector('.js-p');


  pTag.innerHTML = 'Added';

  clearTimeout(pTag)


  setTimeout(function() {pTag.innerHTML = ''}, 2000)

}

let messages = 0;

setInterval(function() {
  if(document.title === 'Exercise 13') {
    document.title = `(${messages}) New messages`;
  } else{
    document.title = 'Exercise 13'
  }
  if(messages <= 0) {
    document.title = 'App'
  }
}, 1000)
