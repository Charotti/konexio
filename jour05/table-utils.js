//EXERCICE 03//



function multiply(int) {


    if (process.argv.length !== 3) {
        console.log("error");

    } else {

        for (let i = 0; i <= 10; i++) {
            console.log(int * i);

        }
    }
}
// function addition(int) {
//     if (process.argv.length !== 3) {
//         console.log("error");

//  } else {
//      for(let i = 0; i <= 10; i++) {
//          console.log(int + i);
//      }
//  }
module.exports= {
    multiply,
//     addition
// }
}
