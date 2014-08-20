/* Thoughts
  
  Javascript
    For for..in loops, it returns each object's property as a *string*... come on Javascript.  
    That basically forces you to use bracket notation, obj[prop], if you want to examine what 
    property actuall is.

  Also Javascript objects don't have inherent length parameter, so we have to make one.
  http://stackoverflow.com/questions/956719/number-of-elements-in-a-javascript-object
    Didn't follow this, but apparently we need a `hasOwnProperty()` check... 
  
*/


function deepEqual(obj1, obj2) {
  if (typeof obj1 == "object" && typeof obj2 == "object") {
    if (obj1 === null && obj2 === null) return true;
    else {//lets iterate through the object recursively 
      if (areObjectsSameSize(obj1, obj2)) {
        var isSame = true;
        for (var element in obj1) {
          isSame = isSame && deepEqual(obj1[element], obj2[element]);
        }
        return isSame;
      }
      else return false;
    }
  }
  else if (typeof obj1 == "function" || typeof obj2 == "function") {
    console.log("Can't compare functions...");
    return undefined;
  }
  else {
    return (obj1 === obj2);
  }
}
  
function areObjectsSameSize(obj1, obj2) {
  return getObjectSize(obj1) === getObjectSize(obj2);
}

function getObjectSize(obj) {
  var length = 0;
  for (var elem in obj) {
    length++;
  }
  return length;
}