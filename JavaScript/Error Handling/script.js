let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");

// Throwing Errors

if (isNaN(num1) || isNaN(num2))
    throw TypeError("Please provide an integer or float")

let sum = parseInt(num1) + parseInt(num2);

console.log("Sum = " + sum);

// Handling Default Errors

function main(){

    try {
        console.log("Sum = " + sum * x); // This will give a Reference Error that we can catch
        return true;
    
    } catch (error) {
        
        console.log("The multiplication attempt was unsuccessful");
        return false;
    }
    finally{    // Finally ensures the execution of code even after the function has returned

        console.log("Code Executing After return Statement!");
    }
}

let test = main();

function doIt() {  
    try {
      return 1;
    } finally {
      return 2;
    }
  }
  
  doIt(); // returns 2

  // It is generally a bad idea to have control flow statements in the finally block. Only use it for cleanup code.
  