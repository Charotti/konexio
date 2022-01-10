//exercice 01//

// let fs= require("fs");

// fs.readFile("jour07.txt", function (err, data) {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("lecture en différé: "+data.toString());

// });

// EXERCICE 02 //
// const array= [1, 2, 3, 4, 5];
// const double= array.map(function(num) {
//     return num * 2;
// });

// console.log(double);

//EXERCICE 03//

// const longNames= 
// [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]
// console.log(longNames);

// const shorNames= longNames.map(function(name) {
//     return ` ${name.firstName} ${name.lastName}`
// });
// console.log(shorNames);

//EXERCICE 04//

// const array= [1, "toto", 34, "javascript", 8];

// const number= array.filter(function(number) {

//     return   Number.isInteger(number);

// })
// console.log(number);

//EXERCICE 05//

// const numbers= [1, 2, 3, 4, 5, 6, 7, 8];
// const even= numbers.filter(function (number) {
//     return number % 2 === 0;
// })
//  console.log(even);

//EX06//

const cakes=

[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

const chocoCake= cakes
.filter(function (cake) {
    return cake.flavor === "chocolate"


})


.map(function (chocoCake) {
    return {
        name: chocoCake.name,
        flavor: chocoCake.flavor,
        status: "sold out"
    }
});


console.log(chocoCake);












