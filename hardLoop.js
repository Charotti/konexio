//SUM//

let numbers =[];
let numRandom = 0;
let sum= 0;



for( i = 0; i <= 50; i++) {

numRandom = Math.floor(Math.random() * (100-0)+1);
  // console.log(numRandom);

  if (numbers.indexOf(numRandom) === -1) {
    numbers.push(numRandom);
} else {
    i--;
} 
}

console.table(numbers);


for( i= 0; i <= numbers.length-1; i++) {
  sum+= i;

}
console.log(sum);


