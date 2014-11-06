function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var hasMom = ancestry.filter(function(person) {
  var hasMom = [];
  if (person.mother != undefined && person.mother != null) {
    if (byName[person.mother].born != undefined)
      hasMom.push(person);
  }
  return hasMom;
});
                              
var momChildAgeDiffs = hasMom.filter(function(child) {
  var differences = [];
  console.log(child);
  if (child.mother == null) console.log ('wtf');
  console.log(child.born);
  console.log(byName[child.mother].born);
  differences.push(child.born - byName[child.mother].born);
  
  
  return differences;
});

var averageMomChildDiffs = average(momChildAgeDiffs);
console.log(averageMomChildDiffs);
// → 31.2
