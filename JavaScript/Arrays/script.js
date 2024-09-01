let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers);
console.log(numbers.length);

console.log(numbers.toString());

console.log(numbers.join(" & "));

numbers[0] = 11;

numbers.push("String");
console.log(numbers);

console.log(numbers.pop());

numbers.shift();
console.log(numbers);

numbers.unshift(111);
console.log(numbers);

// concat returns a new array

let array1 = [1,3,5,7]
let array2 = [2,4,6,8]

// Sorting and Concatenation
// Sort can also take a Custom Comparison Function

console.log((array1.concat(array2)).sort())

// Splice

console.log(array1.splice(1, 2)); // Removed Elements
console.log(array1);

console.log(array2);
console.log(array2.splice(1, 2, 111, 222)); // Removed Elements + Replacement Elements
console.log(array2);

// Slice

console.log(numbers.slice(1, 7));

// Looping through Array

for (const element of numbers) {
    console.log(element);
}

// What the heilll???

numbers.forEach((value, index, arr) =>{
    console.log(value, index, arr);
})


// Mapping Arrays

let squared = numbers.map((value) => {
    return value * value;
})

console.log(squared);

// alternate method using regular functions

// function square(value){
//     return value * value;
// }

// let squared = numbers.map(square);
// console.log(squared);


// Filter

console.log(squared.filter((value) =>{
    if (value > 50)
        return true;

    return false;
}))


// Reduce

console.log(squared.reduce((num1, num2) => {
    return num1 + num2;
}))


// Array From

console.log(Array.from("ABCCDEFGH"));