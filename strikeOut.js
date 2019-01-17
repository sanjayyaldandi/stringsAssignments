let inputString = process.argv[2];
let strikeOutLetter = process.argv[3];

let strikeOutedString = "";

for(let index=0;index<inputString.length;index++){
  let result = inputString[index];
  if(result == strikeOutLetter){
    result = "-";
  }
  strikeOutedString += result;
}

console.log(strikeOutedString);
