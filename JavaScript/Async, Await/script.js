async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve("Data Received");
        }, 5000);
    });
}

async function fetch_API() {
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await x.json();   // Parsing in JSON
    return data;                // data is a "Promise" object
}

    // *** Async Await ***

async function main() {     // Waraper Async Function

    console.log("Loading Modules");

    console.log("Loading Data")

    // Make the function async --> functions works in the background

    // console.log(data);
    // let data = await getData();     // Function is awaited in the call

    fetch_test = await fetch_API();
    console.log(fetch_test);

    // We need a wait before processing data to ensure that data has been fetched

    console.log("Process Data")

    console.log("Start Task # 2")

}

main();


// Meh Approach using promise.then()

// data.then(value => {

// console.log(data);

// We need a wait before processing data to ensure that data has been fetched

// console.log("Processing Data")

// console.log("Starting Task # 2")

// })