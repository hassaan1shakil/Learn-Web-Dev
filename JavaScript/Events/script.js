let button = document.getElementById("btn");

button.addEventListener("click", () => {

    document.querySelector(".box").innerText = "Merry Christmas! Ya Filthy Animal";
})

document.addEventListener("contextmenu", () => {

    alert("Who do you think you are???");
})

document.addEventListener("keydown", (e) => {

    console.log(e.key);
})