function greet(name) {
  console.log(`Hello ${name}`);
}

greet('Basit');
greet('ImisiB');
greet('Fawaz');
greet();

if (greet !== name) {
  console.log('Hi there!');
}


function convertToFahrenheit(celsius) {
  console.log((celsius * 9 / 5) + 32)
}

// convertToFahrenheit(25);


function convertToCelsius(fahrenheit) {
  console.log((fahrenheit - 32) * 5 / 9)
}

// convertToCelsius(86);


function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    console.log(convertToFahrenheit(degrees));
  } else if (unit === 'F') {
    console.log(convertToCelsius(degrees));
  }
}

convertTemperature(27, 'F');
convertTemperature(27, 'C');


function convertLength(length, from, to) {
  if (from === 'miles' && to === 'km') {
    console.log(length * 1.6);
  } else if (from === 'km' && to === 'miles') {
    console.log(length / 1.6);
  } else if (from === 'km' && to === 'km') {
    console.log(length);
  } else if (from === 'miles' && to === 'miles') {
    console.log(length);
  } else if (from === 'miles' && to === 'ft') {
    console.log(length * 5280);
  } else if (from === 'km' && to ==='ft') {
    console.log(length * 3281);
  } else if (from === 'ft' && to === 'miles') {
    console.log(length / 5280);
  } else if (from === 'ft' && to === 'km') {
    console.log(length / 3281);
  } else if (from !== 'km' || 'ft' || 'miles') {
    console.log(`invalid input: ${from}`)
  } else if (to !== 'km' || 'ft' || 'miles') {
    console.log(`invalid input: ${to}`)
  } else if (length === NaN) {
    console.log(`invalid input: ${length}`)
  } 
  else {
    console.log(length);
  }
}

convertLength(50, 'miles', 'km');
convertLength(32, 'km', 'miles');
convertLength(32, 'km', 'km')
convertLength(50, 'miles', 'miles')



