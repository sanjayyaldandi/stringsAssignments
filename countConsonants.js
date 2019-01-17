let input = process.argv[2];

let consonants = "bcdfghjklmnpqrstvwxyz";
let count = 0;

for(let index=0;index<consonants.length;index++){
  for(let index2=0;index2<input.length;index2++){
    if(consonants[index] == input[index2]){
      count++;
    }
  }
}

console.log(count);
