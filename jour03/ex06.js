const sentence = "Hello Konexio !";
let revSentence = "";

for (let i = sentence.length - 1; i >= 0; i--){

    revSentence = revSentence + sentence[i];
 
}
console.log(revSentence);