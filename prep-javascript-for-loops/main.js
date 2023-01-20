let numbers = 0;
for (let i = 0; i < 10; i++) {
  numbers = i;
  console.log(numbers);
}
console.log('');

let increments = 0;
for (let i = 0; i < 10; i++) {
  increments = increments + 2;
  console.log(increments);
}
console.log('');

let explosion = 100;
for (let i = 100; i > 0; i--) {
  explosion = explosion - 1;
  console.log('Time till explosion: ' + explosion);
}
