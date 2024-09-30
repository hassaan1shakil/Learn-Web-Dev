let string1 = "Hello World";

let first_char = string1[0];    // Negative Indexes are not supported
console.log(first_char);

console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.length);

// Template Literals

let name1 = "Alice";
let name2 = "Bob";

console.log(`Can you hear the voices of ${name1} and ${name2}?`)


// Slicing Strings

console.log(string1.slice(0, 4));
console.log(string1.slice(2));


// Replacing Characters

console.log(string1.replace("Hello", "Bye"));

console.log(string1.slice(0, 4));


// Stirng Concatenation

console.log(string1.concat(" from ", name1, " & ", name2));


// Trimming White Spaces

let string2 = "     Hello World!     ";

console.log(string2);
console.log(string2.trim());

// Exploring more fuctions like startsWith etc.