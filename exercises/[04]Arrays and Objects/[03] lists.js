/* Thoughts
  Pointers!!!...!  *___*
  
  Javascript
    We check if a property exists in an object by looking at its value and seeing if its defined or not
    Ex:

    var obj = {}
    if (obj.property == undefined) //it doesn't exist

  Prepend linked lists...
    I'm not exactly sure if my prepend function works correctly, but I think it does...
    Might want to reimplement it using prepend instead of push

  Also don't need that many lines for push()...

*/



function push(list, value) { 
  
  //check for an empty list
  if (list.value == undefined) {
    list.value = value;
    list.rest = null;
    return list;
  }
  else {
    list.rest = { value: value, rest: null }
    return list.rest;
  }
}

function arrayToList(array, list) {
  if (arguments.length == 1) list = {};
  var index = 0;
  var currentNode = list;
  while (index != array.length) {
    currentNode = push(currentNode, array[index]);
    index++;
  }
  return list;
}
  
function listToArray(list) {
  //assuming passed in list is the head node, might find head?
  var array = [];
  while (list.rest != null) {
    array.push(list.value);
    list = list.rest;
  }
  array.push(list.value); //push the tail node
  return array;
}
    
function prepend(value, list) {
  return {value: value, rest:list};
}

function nth(list, n) {
  if (list == undefined) return undefined;
  if (n == 0) return list.value;
  if (list.rest == null) return undefined;
  return nth(list.rest, n-1);
}
