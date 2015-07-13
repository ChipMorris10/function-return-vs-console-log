// Return a value

function showNumber(number) {
  return "This is your number " +number;
}

var result = showNumber('10');
console.log(result)
// The above works

// console.log the result
function sayHi(name) {
  return "Hi there ," +name
}
console.log(result)

var result = sayHi('Chip');
console.log(result)
// The above works

// Use a conditional
function sayHi(name) {
  if (name === 'Chip') {
    return  "Hi " +name
  } else {
    return  "You're not Chip!"
  }
}

var result = sayHi('Fred');
console.log(result)

// All three of these work and were checked by Zach
