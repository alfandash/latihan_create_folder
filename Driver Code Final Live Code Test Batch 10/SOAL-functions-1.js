
function findMax(numberArr) {
  // Code Disini
  return numberArr.reduce(function(a,b){return a>b ? a : b})
}

function findMin(numberArr) {
  // Code Disini
  return numberArr.reduce(function(a,b){return a<b ? a : b})
}

function findMean(numberArr) {
  // Code Disini
  var sum = numberArr.reduce(function(a,b){return a+b})
  return Math.floor(sum / numberArr.length)
}

function findOdds(numberArr) {
  // Code Disini
  var odds = numberArr.filter(function(item){return item % 2 !== 0 ? true : false})
  return odds.join('-')
}

function findEvens(numberArr) {
  // Code Disini
  var evens = numberArr.filter(function(item){return item % 2 === 0 && item > 0 ? true : false})
  return evens.join('-')
}

function numberProcessing(numberArr) {
  var max = findMax(numberArr);
  var min = findMin(numberArr);
  var mean = findMean(numberArr);
  var odds = findOdds(numberArr);
  var evens = findEvens(numberArr);
  return 'Min: ' + min + ', Max: ' + max + ', Mean: ' + mean + ', Odds: ' + odds + ', Evens: ' + evens;
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 1, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
