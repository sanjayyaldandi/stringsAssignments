let mainString = process.argv[2];
let subString = process.argv[3];

let answer = mainString.split(subString).length - 1;

console.log(answer);
