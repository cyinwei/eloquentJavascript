function chessPrinter(size, char) {
  //var size = 8; //can automate this by altering args... how?
  var isBlack = true;
  
  var output = ""; 
  for (var verticalPosition=0; verticalPosition<8; verticalPosition++) {
  	for ( var horizontalPosition=0; horizontalPosition<8; horizontalPosition++) {
      if(isBlack) 	output += char;
      else 			output += " ";
      isBlack = !isBlack;
    }
    output += "\n";
    isBlack = !isBlack; //the rows are always shifted back and forth
  }
  return output;
}

console.log(chessPrinter(8,'#'));