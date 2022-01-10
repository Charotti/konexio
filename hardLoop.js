//Ex 01 SUM//

/*let numbers = [];
let numRandom = 0;
let sum = 0;



for (i = 0; i <= 50; i++) {

    numRandom = Math.floor(Math.random() * (100 - 0) + 1);
    // console.log(numRandom);

    if (numbers.indexOf(numRandom) === -1) {
        numbers.push(numRandom);
    } else {
        i--;
    }
}

console.table(numbers);


for (i = 0; i <= numbers.length - 1; i++) {
    sum += i;

}
console.log(sum);

//EX 02 MAX//


let numbers = [];
let numRandom = 0;


for (i = 0; i <= 50; i++) {
    numRandom = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    console.log(numRandom);
    if (numbers.indexOf(numRandom) === -1) {
        numbers.push(numRandom);
    } else {
        i--;
    }
}

console.table(numbers);

var numMax = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    var item = numbers[i];
    console.log(numbers[i])

    if (item > numMax) {
        numMax = item;
    }
}

console.log(numMax);

    //EX 03 UNIQUE//

let numbers= [];
let numRandom = 0;



for (i = 0; i <= 50; i++) {
    numRandom = Math.floor(Math.random() * (200 - 50 + 1) + 50);
    //console.log(numRandom);
    if (numbers.indexOf(numRandom) === -1) {
        numbers.push(numRandom);
    } else {
        i--;
    }
}

console.table(numbers);


let n = 0

while  (n < numbers.length) {
   //console.log(numbers[n]);
   n++;
   if ( numbers[n] >= 75 && numbers[n] <= 100) {
       break;
   }
}
console.log(numbers[n]);*/

//EXERCICE 04//

const tab = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
const tab2 = ["hello", "stop", "go go go"];
const tab3 = ["hello", "stop", 55];
const tab4 = 78;

function splitWordsAddInTab(words) {
	if (!Array.isArray(words)) {
		console.log("We need an array of strings here!");
		return null;
	}

	let word = "";
	let numberO = 0;

	for (let i = 0; i < words.length; i++) {
		if (!(typeof words[i] === "string")) {
			console.log("The array should contain only strings!");
			return null;
		}

		word = words[i].split("");

		for (let j = 0; j < word.length; j++) {
			if (word[j] === "o") {
				numberO += 1;
			}
		}
	}

	return numberO;
}

console.log(splitWordsAddInTab(tab));
/*console.log(splitWordsAddInTab(tab2));
console.log(splitWordsAddInTab(tab3));
console.log(splitWordsAddInTab(tab4));*/


