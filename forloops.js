//SOMME DES CARRES//

/*let result = 0;
for( let i = 5; i <=10; i++ ){
  result = result + i * i;
}
console.log(result);*/

//COMPTONS//

let result = 0;
for (let i = 100; i <= 1000; i++) {
  let modulo = i % 7;
  if (modulo === 0) {
    result = result + 1;
  }

}

console.log(result);

//chanceux//


let result2 = 0;

for (let i = 1; i <= 20; i++) {
  let launch = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
  console.log(i, launch);
  if (launch >= 5) {
    result2 += launch;
  }
}
console.log(result2);



