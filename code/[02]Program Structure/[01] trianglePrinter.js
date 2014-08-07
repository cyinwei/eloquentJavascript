function trianglePrinter(totalSize) {
  
  if (totalSize <= 0) {
    console.log("Error: can't have negative size, or zero size");
    return;
  }
  
  var output = "";
  for (var rowSize = 1; rowSize <= totalSize; rowSize++) {
    var block = rowSize;
    while (block != 0) {
      output += "#";
      block--;
    }
    output += "\n";
  }
  return output;
}

console.log(trianglePrinter(7));