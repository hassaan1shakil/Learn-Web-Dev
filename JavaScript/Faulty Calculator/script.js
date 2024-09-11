let custom_ops = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
    "**": "*"
};

function calculator(num1, num2, operator){

    if (num2 == 0 && operator == "/")
        return "Division By Zero is Not Possible.";

    // genrate random number

    random = Math.floor((Math.random()) * 101);
    console.log("random:", random);

    // correct calc

    if (random > 10){

        if (operator == "+")
            return num1 + num2;

        else if (operator == "-")
            return num1 - num2;

        else if (operator == "*")
            return num1 * num2;

        else if (operator == "/")
            return num1 / num2;

        else if (operator == "**")
            return num1**num2;
    }

    // faulty calc (only 10% of the time)

    else {

        operator = custom_ops[operator];

        return `${eval(`${num1} ${operator} ${num2}`)}`;
    }
}

let operand1 = prompt("Enter the first operand: ");
let operand2 = prompt("Enter the second operand: ");
let operator = prompt("Enter the operator: ");

console.log(calculator(operand1, operand2, operator));