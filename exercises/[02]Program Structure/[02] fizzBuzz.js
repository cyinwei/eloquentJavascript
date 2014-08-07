function fizzBuzz(range) {
  
  if (range <= 0){
    console.log("Error: negative or zero range for function fizzBuzz()");
    return;
  }
  
  var output = "";
  for (var incrementer = 1; incrementer <= range; incrementer ++) {
    if (incrementer % 3 === 0) 							output += "Fizz";
    if (incrementer % 5 === 0) 							output += "Buzz";
    if (incrementer % 3 === 0 || incrementer % 5 === 0) output += "\n";
  }
  return output;
}

console.log(fizzBuzz(100));