
function addTwoNumbers(num1, num2) {
  return num1 + num2;

}
const addTwoNumbersResults = addTwoNumbers(6, 2);
console.log(addTwoNumbersResults);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const totalMinutes = convertHoursToMinutes(4);
console.log(totalMinutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('Simon');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiplyBy5Results = addAndMultiplyBy5(10, 3);
console.log(addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyAndDivideBy5Results = multiplyAndDivideBy5(3, 10);
console.log(multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractTwoNumbersResults = subtractTwoNumbers(32, 20);
console.log(subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * 3.14 * radius;
}
const getCircleCircumferenceResults = getCircleCircumference(5);
console.log(getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
const getFullnameResults = getFullName('Brandon ', 'Jones');
console.log(getFullnameResults);

function cube(number) {
  return number * number * number;
}
const cubeResults = cube(3);
console.log(cubeResults);
