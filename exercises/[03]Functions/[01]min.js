function min(x, y) { //should be a way to do arbitrary amount of numbers
  
  if(typeof(x) != "number" || typeof(y) != "number") {
    console.log("Error: some input is not a number.");
    return;
  }
  
  if (x < y) return x;
  else return y;
}

  
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10