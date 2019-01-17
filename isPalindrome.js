let input = process.argv[2];

let isPalindrome = true;

for(let index=0;index<input.length/2;index++){
  if(input[index] != input[input.length-index-1]){
    isPalindrome = false;
  }
}

console.log(isPalindrome);
