function addition(num1, num2){
    return num1 + num2;
}

function custom_prompt(prompt = "we got nothing to say to you!"){
    return ("Hey Harry, " + prompt);
}

const subtract = (num1, num2) => {return num1 - num2}

console.log(addition(5, 6));

console.log(custom_prompt("we wanna say goodnight to you!"));

console.log(custom_prompt());

let x = addition(5, 6);
console.log(x);

let y = subtract(5, 4);
console.log(y);