var person = {
  firstName: 'Brandon',
  lastName: ' Miller',
  hobby: 'Running'
};
console.log(person);

var fullName = "The person's name is " + person.firstName + person.lastName;
console.log(fullName);

person.job = 'Teacher';
person.previousJob = 'Muscian';

console.log("The person's current job is: " + person.job);
console.log("The person's previous job was: " + person.previousJob);
console.log('the complete person object:', person);
