var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function flatten(array){
  var flattenedArray = [];
  array.forEach(function(element) {
    flattenedArray = flattenedArray.concat(element);
  });
  return flattenedArray;
}

console.log(flatten(arrays));
