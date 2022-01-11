const axios = require("axios");

let countriesInfo = [];
axios.get("https://restcountries.com/v3.1/all")
    .then(function (res) {
        // console.log(res);
        // console.log(res.data[0]);

        countriesInfo = res.data.map(function (country) {
            return {
                name: country.name.common,
                capital: country.capital,
                flag: country.flags.png
            }
        })
        console.log(countriesInfo)
    })