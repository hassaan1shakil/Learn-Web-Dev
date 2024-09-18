// A = P(1 + r*t)

function simple_interest(){
    
    let principal = prompt("Principal Amount: ");
    let time = prompt("Time (in years): ");
    let rate = prompt("Interest rate (%): ");
    rate = rate / 100;

    let amount = principal * (1 + rate * time);
    console.log("Final Amount: " + amount);
}

simple_interest();