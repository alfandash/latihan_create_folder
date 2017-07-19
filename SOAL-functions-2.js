// Function 2 Competency Test

function removeDash(str) {
  // Code Disini
  var split = str.split('')
  var result = split.map(function(item){return item === '-' ? ' ' : item})
  return result.join('')
}

function capitalizeString(str) {
  // Code Disini
  var split = str.split('')
  var result = split.map(function(item, index){return index === 0 || str[index - 1] === ' ' ? item.toUpperCase() : item.toLowerCase()})
  return result.join('')
}

function transformTextToNumber(str) {
  // Code Disini
  var split = str.split('')
  var result = split.map(function(item){
  	switch(item) {
  		case 'i':
  		case 'I':
  			return 1 
  			break;
  		case 'e':
  		case 'E':
  			return 3
  			break;
  		case 's':
  		case 'S':
  			return 5
  			break;
  		case 'o':
  		case 'O':
  			return 0
  			break;
  		case 'a':
  		case 'A':
  			return 4
  			break;
  		default:
  			return item
  			break;
  	}
  })
  return result.join('')
}

function stringManipulator(str) {
  var cleanedStr = removeDash(str);
  var capitalizedStr = capitalizeString(cleanedStr);
  var transformedStr = transformTextToNumber(capitalizedStr);
  return transformedStr;
}

console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// // H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// // L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// // D15 15 V3ry 345y 1 C4n D0 Th15