




function calculate(num1, operator, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num2 === undefined) {
        return console.log("error");
    }



    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else if (operator === "*") {
        return num1 * num2;
    }

}
console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));







