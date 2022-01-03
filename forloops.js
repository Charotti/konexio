//SOMME DES CARRES//

/*let result = 0;
for( let i = 5; i <=10; i++ ){
  result = result + i * i;
}
console.log(result);*/

//COMPTONS//

let result = 0;
for (let i = 100; i <= 1000; i++){
  let modulo= i % 7 ;
  if (modulo ===0)
 result = result +1;
 
}

console.log(result);
