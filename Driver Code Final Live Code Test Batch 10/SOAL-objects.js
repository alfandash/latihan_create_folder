// Objects Competency Test

function Fox(speciesParam, favouriteFoodParam) {
  // Code Disini
  this.species = speciesParam
  this.favouriteFood = favouriteFoodParam

  this.howl = function() {
  	var x;
  	switch(this.species[0]) {
  		case 'a':
  		case 'A':
  		case 'i':
  		case 'I':
  		case 'u':
  		case 'U':
  		case 'e':
  		case 'E':
  		case 'o':
  		case 'O':
  			x = 'an'
  			break;
  		default : 
  			x = 'a'
  			break;
  	}

  	return `Howl! I’m ${x} ${this.species} Fox !!!`
  }

  this.meet = function(foxObj) {
  	return this.species === foxObj.species ? 'Hey brother!' : 'hello nice to meet you'
  }

  this.changeGenetics = function(newSpecies) {
  	this.species = newSpecies
  }
}

var jakeTheFox = new Fox("Darwin", "Meat");
var mikeTheFox = new Fox("Ethiopian", "Meat");
var lukeTheFox = new Fox("Fire", "Grass");
var chrisTheFox = new Fox("Darwin", "Grass");

console.log(jakeTheFox.howl()); // howl! I'm a Darwin Fox !!!
console.log(mikeTheFox.howl()); // howl! I'm an Ethiopian Fox !!!
console.log(lukeTheFox.howl()); // howl! I'm a Fire Fox !!!

console.log(jakeTheFox.meet(mikeTheFox)); // hello nice to meet you
console.log(jakeTheFox.meet(chrisTheFox)); // hey brother!
console.log(mikeTheFox.meet(lukeTheFox)); // hello nice to meet you

jakeTheFox.changeGenetics('Ethiopian');
console.log(jakeTheFox.meet(chrisTheFox)); // hello nice to meet you
console.log(jakeTheFox.meet(mikeTheFox)); // hey brother!
