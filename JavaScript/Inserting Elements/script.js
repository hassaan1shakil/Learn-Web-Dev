document.querySelector(".container").innerText;
document.querySelector(".container").innerHTML;
document.querySelector(".container").outerHTML;

document.querySelector(".container").tagName;
document.querySelector(".container").nodeName;

document.querySelector(".container").textContent 

// Inserting Node (element)

let new_box = document.createElement("div");
new_box.innerHTML = "I am a new box";
new_box.setAttribute("style", "color: red");
document.querySelector(".container").append(new_box);

// Before / After
// document.querySelector(".container").before(new_box); 
// document.querySelector(".container").after(new_box); 

// Replace With
// document.querySelector(".container").replacewith(new_box);


// Inserting HTML/Text/Element

// document.querySelector(".container").insertAdjacentHTML("beforebegin", "<div> Hey love </div>") 
// document.querySelector(".container").insertAdjacentHTML("afterbegin", "Hey love") 
// document.querySelector(".container").insertAdjacentText("beforeend", "Hey love") 
// document.querySelector(".container").insertAdjacentElement("afterend", new_box) 


// Remove Node
// document.querySelector(".container").remove()


// Class List && Class Name

// document.querySelector(".container").classList
// document.querySelector(".container").className
// document.querySelector(".container").classList.add("red-box")

// document.querySelector(".container").classList.toggle("red-box")