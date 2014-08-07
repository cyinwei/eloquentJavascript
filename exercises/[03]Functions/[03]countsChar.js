function countBs(input) {
  
  if (typeof(input) != "string") {
    console.log("Error: input is not a string");
    return;
  }
  
  var count = 0;
  for (var position=0; position<input.length; position++) {
    if (input[position] == "B") count++;
  }
  return count;
}

function countChar(input, char) {
  
  if (typeof(input) != "string" || typeof(char) != "string") {
    console.log("Error: input(s) is not a string");
    return;
  }
  else if (char.length != 1) {
    console.log("Error: character input is not a single character");
    return;
  }
  
  var count = 0;
  for (var position=0; position<input.length; position++) {
    if (input[position] == char) count++;
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4