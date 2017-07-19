// Recursive Competency Test

function tambahTerus(num) {
  // Code disini
  var arr = num.toString().split('')

  if (arr.length === 1)
  	return num
  else {
  	var newNum = arr.reduce(function(a,b){return Number(a) + Number(b)})
  	return tambahTerus(newNum)
  }
}

console.log(tambahTerus(13)); // 4
console.log(tambahTerus(54)); // 9
console.log(tambahTerus(123)); // 6
console.log(tambahTerus(5)); // 5
console.log(tambahTerus(1234)); // 1
console.log(tambahTerus(99)); // 9
console.log(tambahTerus(88888888)); // 1
console.log(tambahTerus(333)); // 9
