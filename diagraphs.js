let inputString = process.argv[2];

let outputString = "";
let delimiter = "";

for(let index=0;index<inputString.length;index++){

  previousLetter = inputString[index];
  currentLetter = inputString[index+1];

  if(previousLetter == currentLetter){
    outputString += delimiter + previousLetter + currentLetter;
    delimiter = ",";
  }
}

console.log(outputString);
