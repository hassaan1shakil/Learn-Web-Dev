// Using For Loop

// let num = 4;
// let fact = 1;

// for (let i = num; i >= 1; i--){

//     fact *= i;
// }

// console.log(fact);


// Using Array Reduce Method

// let num = 8;
// let array = [];

// while (num > 1) {

//     array.push(num);
//     num--;
// } 

// Another way to make an array from an integer

//  let array = Array.from(Array(num + 1).keys())


// let fact = array.reduce((accumulator, current_val) => {
//     return accumulator * current_val;
// }, 1)

// console.log(fact);


// Recursive Approach

function factorial(num){

    if (num < 0){
        console.log("Factorial of Negative Numbers is not defined");
        return;
    }

    if (num == 1 || num == 0)
        return 1;

    return factorial(num - 1) * num;
}

let fact = factorial(7);
console.log(fact);