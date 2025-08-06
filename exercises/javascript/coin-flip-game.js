let newResult = '';

let score = 0;

function playGame(guess) {
  const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
  };
  
  const randomNumber = Math.random();
  
  let result = randomNumber;
  
  if (randomNumber <= 0.5) {
    result = 'heads';
  } else if (randomNumber >= 0.5) {
    result = 'tails'
  }
  if(guess === result) {
    newResult = 'You win'
  } else {
    newResult = 'You lose'
  }
  if (newResult === 'You win') {
    score.wins += 1;
alert(`${newResult}.
You guessed: ${guess}. The coin: ${result}.
Wins: ${score.wins}. Losses: ${score.losses}.
`)
  } else if (newResult === 'You lose') {
    score.losses += 1
alert(`${newResult}.
You guessed: ${guess}. The coin: ${result}.
Wins: ${score.wins}. Losses: ${score.losses}.
`)
  }
  localStorage.setItem('score', JSON.stringify(score))
}
