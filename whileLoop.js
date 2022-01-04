/*//EXERCICE 01 COMPTONS//
let number = 50;
while (number <= 200) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
   
}

//EXERCICE 02 TRY AGAIN//

let dice = 0;
let count = 0;

while (dice !== 6) {
    dice = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    count++;
}
console.log(count);*/


//EXERCICE 03//


let ussainBolt = 0;
let tysonGay = 0;
let winner = "";
let number1 = Math.floor(Math.random() * ((10 - 1) + 1) + 1);
let number2 = Math.floor(Math.random() * ((10 - 1) + 1) + 1);


while (ussainBolt <= 100 || tysonGay <= 100) {
    ussainBolt += number1;
    tysonGay += number2;
}
if (ussainBolt >= tysonGay) {
    winner = "ussainBolt";
} else {
    winner = "tysonGay";
}

console.log(winner);






