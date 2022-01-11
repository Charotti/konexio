
//EXERCICE 01//

const axios = require("axios");

// let countriesName = [];
// axios.get("https://restcountries.com/v3.1/all")
// .then(function (res) {
//     // console.log(res);
//     // console.log(res.data[0]);

//  countriesName= res.data.map(function(country){
//      return country.name.common
//  })
//  console.log(countriesName);
//  console.log(countriesName.join("-"));


// // //     for (let i = 0; i <= res.data.length -1; i++) {
// // //         countriesName.push(res.data[i].name.common)
// // //     }
// // //     console.log(countriesName);
// })

//EXERCICE 02//

// function getFact() {

//     axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
//         console.log(res.data.value)
//     });
// }
// getFact();


//03 POKEMON//

function catchPokemon(number) {
    id: "";
    name: "";
    axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`).then(function (res) {
        console.log("id :", number);
        console.log("name :", res.data.forms[0].name)
      
    })
}
catchPokemon(28);







