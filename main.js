function showNumber(number) {
  return "This is your number " +number;
}

var result = showNumber('10');
console.log(result)
// The above works

function sayHi(name) {
  return "Hi there ," +name
}
console.log(result)

var result = sayHi('Chip');
console.log(result)
// The above works

function sayHi(name) {
  if (name === 'Chip') {
    return  "Hi " +name
  } else {
    return  "You're not Chip!"
  }
}

var result = sayHi('Fred');
console.log(result)
