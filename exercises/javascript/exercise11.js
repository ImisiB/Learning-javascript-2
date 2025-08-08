const nums = [10,20,30];

nums[2] = 99;

console.log(nums);


function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([1,20,22,24,5]));
console.log(getLastValue(['hi','hello','good']));


function arraySwap(array) {
  const last = array.length - 1;

  const lastValue = array[last];
  const firstValue = array[0];

  array[last] = firstValue;
  array[0] = lastValue;

  return array
}

console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi','hello','good']));



for(let i = 0; i <= 10; i += 2) {
  console.log(i)
}

console.log('');


for(let i = 5; i >= 0; i--) {
  console.log(i)
}

console.log('');

let i = 0;

while(i <= 10) {
  console.log(i);
  i+=2
}

console.log('');

let index = 5;

while(index > 0) {
  console.log(index)
  index--
}

const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
  result.push(array[i] + 1);
}

console.log(result);

function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));