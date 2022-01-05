//EXERCICE 02//

function multiply(int) {


    if (process.argv.length !== 3) {
        console.log("error");

    } else {

        for (let i = 0; i <= 10; i++) {
            console.log(int * i);

        }
    }
}

multiply(parseInt(process.argv[2]));