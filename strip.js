let input = process.argv[2];

let output = "";

for(let index=0;index<input.length;index++){
  if(input[index] != " "){
  output += input[index];
  }
}

console.log(output);
