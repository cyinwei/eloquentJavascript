function isEven(x) {
  
  if (typeof(x) != "number") {
    console.log("Error: input is not a number");
    return;
  }
  
  if (x == 0) 		return true;
  else if (x == 1) 	return false;
  else if (x < 0) 	return isEven(x+2); //for negative numbers, want them to reach 0, 1 
  else return isEven(x-2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??