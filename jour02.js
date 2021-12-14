//Exercice 01//

let integer = 102;
let float = 13.9;
console.log(integer, float);

//Exercice 02//

let basic = 34;
let stringfield = basic.toString();
console.log(stringfield);

//Exercice 03//

let num = 1.5;
let rounded = Math.round(num);
console.log(rounded);

//Exercice 04//

/*let test = 12;
let bis =  5;
console.log( test + bis);
console.log( test - bis);
console.log( test / bis);
console.log( test * bis);
console.log( test ** bis);
console.log( test % bis);*/

/*console.log( test += bis);
console.log( test -= bis);
console.log( test *= bis);
console.log( test /= bis);
console.log( test **= bis);
console.log( test %= bis);*/

//Exercice 05//

let test = 143;
let bis =  219;
console.log(test > bis, test < bis, test === bis, test !== bis);

//Exercice 06//

let limit = 50;
let score = 64;

if (score >= limit){
    console.log("Ok good !")
}else 
{
console.log( "Oh nooo...")
};

//Exercice 07//

let password = "az";
console.log(password.length);

if (password.length > 5 ){
    console.log( "Password is secure")
}else{
    console.log("Password is not secure");
};

//Exercice 08//

if (score >= limit && password.length > 5 ){
    console.log( "Everything is good")
}
    if (score >= limit || password.length > 5 ){
       console.log("Something is good"); 
    }
       else{
           console.log("Nothing is good");
       };

//Bonus//

let random = Math.random() * (((6 - 1) + 1) + 1);
console.log(random);
random = Math.floor(random);
console.log(random);

if(random === 6){
    console.log("yes I win!");
}else
{
    console.log("So close!");
};

//Bonus II //
let month = "march";


switch (month){
    case "january" :
        console.log("winter");
        break;
    case "february":
        console.log("winter");
        break;
    case "march" :
        console.log( "spring");
        break;
    case " april" :
        console.log("spring");
        break;
    case " may" :
        console.log("spring");
        break;
    case "june" :
        console.log("summer");
    case "july" :
        console.log("summer");
        break;
    case "august" : 
        console.log("summer");
        break
    case "september" :
            console.log("fall");
        break;
    case "october" :
                console.log("fall");
        break;
    case "november" :
            console.log("fall");
        break; 
    case "december" :
        console.log("winter");
        break; 
};



        