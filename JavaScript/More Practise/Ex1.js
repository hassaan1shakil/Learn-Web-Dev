let score = 100;
let no_guesses = 0;

let random = Math.floor(1 + Math.random() * 100);
console.log(random);

let guess;

while (guess != random && no_guesses < 100){
    guess = prompt("Guess the number: ");
    no_guesses++;

    if (guess == random)
        console.log("Your guess is correct");

    else if (guess > random)
        console.log("Your guess is higher than the number");

    else
        console.log("Your guess is lower than the number");
}

if (no_guesses >= 100){
    console.log("You have run out of guesses. Try again some time :)");
}

else{
    console.log("Your Score is", score - no_guesses);
}