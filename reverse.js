let input = process.argv[2];

let reversedString = "";

for(let index=input.length-1;index>=0;index--){
  reversedString += input[index];
}

console.log(reversedString);
