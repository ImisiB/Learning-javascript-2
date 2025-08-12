const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2,4))
console.log(multiply(7,10))


const countPositive = nums => {
  let answer = 0;

  nums.forEach(element => {
    if(element > 0) {
      answer++;
    } else{
      return;
    }
    console.log(answer);
  });
}

countPositive([1,-3,5])
countPositive([-2,3,-5, 7,10])



const addNum = (array,num) => {
  console.log(array.map(value => value + num))
}

addNum([1,2,3], 2)
addNum([-2,-1,0,99], 2)


const removeEggs = foods => {
  foods.filter((food) => {
    if(foods === 'egg') {
      return;
    } else{
      console.log(food)
    }
  })
}

removeEggs(['egg', 'apple', 'egg', 'egg', 'ham'])