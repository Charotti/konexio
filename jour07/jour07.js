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

const longNames= 
[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
console.log(longNames);

const shorNames= longNames.map(function(name) {
    return ` ${name.firstName} ${name.lastName}`
});
console.log(shorNames);







