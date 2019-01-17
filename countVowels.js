let input = process.argv[2];

let vowels = "bcdfghjklmnpqrstvwxyz";
let count = 0;

for(let index=0;index<vowels.length;index++){
  for(let index2=0;index2<input.length;index2++){
    if(vowels[index]==input[index2]){
      count++;
    }
  }
}

console.log(count);
