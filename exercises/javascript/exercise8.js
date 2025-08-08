amazon = {
  basketball: 2095
}

console.log(amazon.basketball);
console.log(amazon.basketball + 500)
amazon["delivery-time"] = "3 days";
console.log(amazon)

function comparePrice(product1, product2) {
  if (product1.price > product2.price) {
    console.log(product2.name);
  } else if(product1.price < product2.price) {
    console.log(product1.name);
  }
}

comparePrice({name: 'shoe', price: 800}, {name: 'bag', price: 900})


function isSameProduct(product1, product2) {
  if (product1.price === product2.price) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isSameProduct({name: 'shoe', price: 500}, {name: 'bag', price: 500})


console.log('Good Morning'.toLowerCase());


const repeatWord = 'test';
console.log(repeatWord.repeat(2));