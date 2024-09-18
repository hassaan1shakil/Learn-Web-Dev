let obj = {
    1: "S",
    2: "W",
    3: "G"
}

let player_points = 0;
let computer_points = 0;
let confirmation = false;

for (let i = 0; i < 3; i++) {

    let random = Math.floor(1 + Math.random() * 3);
    let computer_letter = obj[random];
    
    let player_letter;
    confirmation = false;

    while (!confirmation) {
        player_letter = prompt("Enter your choice (S, W, G): ");
        confirmation = confirm("Is your choice final?");
    }

    if (computer_letter == player_letter) {
        alert("Draw!");
        computer_points++;
        player_points++;
    }

    else if (computer_letter == "S" && player_letter == "W") {
        alert("Computer Wins");
        computer_points++;
    }

    else if (computer_letter == "G" && player_letter == "S") {
        alert("Computer Wins");
        computer_points++;
    }

    else if (computer_letter == "W" && player_letter == "G") {
        alert("Computer Wins");
        computer_points++;
    }

    else if (player_letter == "S" && computer_letter == "W") {
        alert("Player Wins");
        player_points++;
    }

    else if (player_letter == "G" && computer_letter == "S") {
        alert("Player Wins");
        player_points++;
    }

    else if (player_letter == "W" && computer_letter == "G") {
        alert("Player Wins");
        player_points++;
    }

}

if (computer_points == player_points)
    alert("Game Drawn!")

else if (computer_points > player_points)
    alert("Computer wins the game!")

else
    alert("Player wins the game!")