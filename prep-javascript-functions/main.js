function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('Sum: ', sum);


function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('Minutes : ', minutes);


function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log(greeting);


function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var totalSum = addAndMultiplyBy5(10, 5);
console.log('Total sum: ' + totalSum);
