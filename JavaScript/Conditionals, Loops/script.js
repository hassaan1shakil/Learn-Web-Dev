console.log("Hey budyyyy")

let a = 5;
let b = 6;

c = (a > b) ? (a - b) : (b - a);

console.log(c);

// Loops

// For in Loop

let obj = {
    name: "Sawcon",
    id: 235,
    clearance: "Level-3"
};

for (const key in obj)
{
    const element = obj[key];
    console.log(key, ":", element);
}

console.log("\n\n");

// For of Loop

const nums = [1, 2, 3, 4, 5];

for (const c of "harry")
{
    console.log(c);
}

console.log("\n\n");

for (const iterator of nums) {
    console.log(iterator);
    
}