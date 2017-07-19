// Array 2 Competency Test

function initialGrouping(studentsArr) {
  // Code hanya disini
  var obj = {}
  var firstLetter = []
  studentsArr.map(function(item){
    if (obj[item[0]] === undefined) {
      obj[item[0]] = true
      firstLetter.push(item[0])
    }
  })

  var result = []
  firstLetter.map(function(item, index){
    var temp = [item]
    var arr = studentsArr.filter(function(item2){return item2[0] == item ? true : false})
    result.push(temp.concat(arr))
  })

  return result
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/