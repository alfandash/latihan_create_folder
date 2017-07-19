/*
HACKTIV8 Final Live Coding Rocket

=======================
British National Crisis
=======================
*/

function nextTargetArea(code) {
  // Code Hanya Disini!
  var arr = ['TWO','THREE','FOUR','SIX','SEVEN','EIGHT']
  var arrLength = [3, 4, 5]
  var obj = {
  	'TWO': 2,
  	'THREE': 3,
  	'FOUR': 4,
  	'SIX': 6,
  	'SEVEN': 7,
  	'EIGHT': 8
  }
  
  return recrusive(code)
  
  function recrusive(param) {
  	var str = param.split('')
  	var sum = 0;

  	if (str.length > 0) {
	  	for (var i = 0; i < arr.length; i++) {
	  		var word = arr[i];
			var wordExist = false;
			var count = 0;
		  	var tempStr = str.slice(0) //duplicate array
	  		
	  		for (var j = 0; j < word.length; j++) {
	  			var letter = word[j]
	  			for (var k = 0; k < tempStr.length; k++) {
	  				if (tempStr[k] === letter) {
	  					tempStr.splice(k, 1)
	  					count++
	  					break
	  				}
	  			}
	  		}

	  		if (count === word.length) {
	  			wordExist = true
	  		}

	  		if (wordExist) {
	  			sum = obj[word]
	  			str = tempStr
	  			break
	  		} 
	  	}
	}


  	if (str.length === 0) {
  		return sum
  	}
  	else {
  		return sum + recrusive(str.join(''))
  	}
  }
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"
