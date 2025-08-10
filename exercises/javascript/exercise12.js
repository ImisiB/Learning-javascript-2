let words = ['hello', 'world', 'search', 'good']
words = ['not', 'found']

for(let i = []; i < words; i++) {
  if (words.includes('search')) {
    console.log(words.indexOf('search'))
    break;
  } else{
    console.log(-1)
  }
}


function findIndex(array, word) {
  if (array.includes(word)) {
    console.log(array.indexOf(word));
  } else{
    console.log(-1)
  }
}
findIndex(['green', 'red', 'blue', 'red'], 'red')

function removeEgg(foods) {
  const reverseFoods = foods.reverse()

  const result = []
  let eggsRemove = 0;

  for (let i = 0; i < foods.length; i++) {
    if (reverseFoods[i] === 'egg' && eggsRemove < 2) {
      eggsRemove++
      continue;
    }
    result.push(reverseFoods[i]);
  }

  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']))




function removeEgg(foods) {
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();

  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(reversedFoods[i]);
  }

  return result.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);



for(let i = 1; i <= 20; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if(i % 3 === 0) {
    console.log('Fizz');
  } else if(i % 5 === 0) {
    console.log('Buzz');
    continue;
  } else{
    console.log(i);
  }
}



function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }

  return -1;
}
function unique(array) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }
  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
