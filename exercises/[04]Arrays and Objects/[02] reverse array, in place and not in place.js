/*
  @author: Yinwei (Charlie) Zhang
*/


function reverseArray(array) {
  //produces an array reversed out, with a stack :)
  //wtf, javascript passes objects BY REFERENCE !!!
  var tempArray = array;
  var returnArray = [];
  while (tempArray.length > 0) {
    returnArray.push(tempArray.pop());
  }
  return returnArray;
}

function reverseArrayInPlace(array) {
  //does a rotation about the middle
    
  //the reason we can ignore odd and even
  /*
  	By example:
  	say we have 	[1, 2, 3]
    				[1 ,2]
                    
    to reverse the index, we would have to swap the first two values
    so [1,2,3] => [3,2,1]
    
    notice that [2] is unmoved, and does not need to be moved for the
    swap to occur.
    
    for the even [1,2], only a single swap is needed.
    
    ------------------------------------------------------------------
    Intuition:  say we have an arch like so
         
          ### 
       ###   ###
     ###       ###
    ###         ###
    
    To reverse the stones in the arch, we just need to swap each pair 
    of stones *except* for the keystone, which we leave in place
    
    So all arches with keystones are odd...
    and all arches without keystones are even.
    
    -------------------------------------------------------------------
    # of swaps
    So for each swap, we switch two elements in order.  So we need 1/2
    the swaps for even length arrays, and the same for the odd length
    arrays if we ignore the keystones.
    
  */
  var midpointIndex = Math.floor(array.length / 2);
  
  for (var index = 0; index <= midpointIndex; index++) {
    var swapIndex = array.length - 1 - index;
    swap(index, swapIndex, array);
  }
  
  function swap(indexA, indexB, array) { //void, not really in place tho
    var temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }
}
    
  
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]