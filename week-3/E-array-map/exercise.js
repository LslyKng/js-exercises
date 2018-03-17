// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

/*var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function timesHundred(number) {
  return number * 100;
}

var yippee = numbers.map(timesHundred);

console.log(yippee);*/

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersHundred = numbers.map(function(number) {
  return number * 100;
});
console.log(numbersHundred);

/*var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(function double(number) {
  return number * 2;*/
/*function double(number) {
  return number * 2;
}

var numbers = [1, 2, 3];
var numbersDoubled = numbers.map(double);*/
