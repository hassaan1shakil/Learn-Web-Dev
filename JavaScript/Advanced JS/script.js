async function sleep(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

// IIFE

(async function main(){

    let test = sleep();

}) ();


// Destructuring Assignment

// In Arrays

let [x1, y1] = [1,2,3,4,5,6]; // only x1 & y1 will be assigned values
console.log(x1);
console.log(y1);

console.log("After Destructuring");

let [x2, y2, ...rest] = [1,2,3,4,5,6,7,8,9];
console.log(x2);
console.log(y2);
console.log(rest);

// In Objects

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// const a = obj.a;
// const b = obj.b;

console.log(a);
console.log(b);

const one = "the"
const two = "no"
const three = {one, two}
console.log(three);


// Spread Operator

function sum(num1, num2, num3){
    return num1 + num2 + num3;
}

array = [1,2,3,4,5,6,7]

console.log("Sum: " + sum(...(array.slice(3, 7))));

test_obj = {...array};  // Makes an object with "key = array's index" & "value = array's element" for the key-value pair

console.log(test_obj);


// Hoisting

{
    console.log(var1);

    var var1 = 10;  // the value 10 will not be displayed as it is assigned after the 
}