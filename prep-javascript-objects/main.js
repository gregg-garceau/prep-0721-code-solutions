var person = {
  firstName: 'Gregg',
  lastName: 'Garceau',
  hobby: 'Video Games',
};

var fullName = person.firstName + ' ' + person.lastName;
console.log('My full name is : ' + fullName);

person.job = 'Pharmacy Tech';
console.log("My current job is : " + person.job);

person.previousJob = "Golf Pro";
console.log('My previous job was a : ' + person.previousJob);

console.log(person);
