function range(start, end, step) {
  if (arguments.length == 2) step = 1;
  
  //test input for correctness 
  if (typeof start != 'number' || typeof end != 'number' || typeof step != 'number') {
    console.log("Error: non number input for function range().");
    return;
  }
             
  //need to prevent infinite steps
  if ((step > 0 && end < start) || (step < 0 && end > start)) {
    console.log("Error: step value doesn't allow start to reach to end.");
    console.log(step, start, end);
    return;
  }
  
  if (step == 0) {
    console.log("Error: our function doesn't do anything, our step is 0).");
    return;
  }
  
  //meat of the function
  var summedNumbers = [];
  //should not use a forloop here, since the incrementation can be + or -
  var currentNumber = start;
  while(currentNumber != end) {
    summedNumbers.push(currentNumber);
    currentNumber += step;
  }
  summedNumbers.push(end); //to get the last number
  return summedNumbers;
}

function sum(arrayOfNumbers) { //trying a different sort of error handling
  if (typeof arrayOfNumbers == 'object') {
    if (arrayOfNumbers === null) {
      console.log("Error: in sum() input is null.");
      return;
    }
    
    //not gonna check every element of a mixed array to see if its a number...
    
    //meat
    var sum = 0;
    for (var currentIndex = 0; currentIndex < arrayOfNumbers.length; currentIndex++) {
      sum += arrayOfNumbers[currentIndex];
    }
    
    return sum;    
  }
  else {
    console.log("Error: in sum() input is not an array.");
    return;
  }
}