/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/
/*var testScores = [90, 50, 100, 25, 81, 66, 80];
function lowest(number) {
  return (score = number.Math.min > 60);
}
var result = testScores.find(lowest);
console.log(result);*/

var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = findLowestPassScore(testScores);

function ascOrder(a, b) {
  return a - b;
}
function findLowestPassScore(scores) {
  return scores.find(passScore);
}
function passScore(scores) {
  return scores > 60;
}

console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66

/*var testScores = [90, 50, 100, 25, 81, 66, 80];
var lowestPassScore = LowestPassScore(haystack);
function lowScore(score) {
  return score.Math.min < 50;
}

var scoreUnderFifty = score.find(lowScore);

console.log();*/

/* EXPECTED OUTPUT */
// 66
