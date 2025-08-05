const hour = 14;
const name = 'Basit';

if (hour >= 6 && hour <= 12) {
  console.log(`Good morning ${name}!`);
} else if(hour >= 13 && hour <= 17) {
  console.log(`Good afternoon ${name}!`);
} else{
  console.log(`Good night ${name}!`);
}



const age = 67;
const isHoliday = true;

if (isHoliday === false) {
  if (age <= 6) {
    console.log('Discount');
  } else if (age >= 6) {
    console.log('No discount');
  } else if (age >= 65) {
    console.log('Discount');
  }
} else if(isHoliday === true) {
  console.log('No discount on holiday');
}


const randomNumber = Math.random();

let result = randomNumber;

const guess = 'heads';

/*
if (randomNumber <= 0.5) {
  result = 'heads';
} else {
  result = 'tails';
}

if(guess === result) {
  console.log('You win!');
} else {
  console.log('You lose!')
}*/



result = randomNumber < 0.5? 'heads' : 'tail';


console.log(guess === result? 'You win' : 'You lose');


// if(guess === result) {
//   console.log('You win!');
// } else {
//   console.log('You lose!')
// }
