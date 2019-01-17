let input = process.argv[2];

let output = "";
let delimiter = "";

for(let index=0;index<input.length;index++){
	output += delimiter + input[index];
  delimiter = ",";
}

console.log(output);
