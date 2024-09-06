function random_color_rgb(){

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";

    //return `rgb(${r}, ${g}, ${b})`;     // Template Literal
}


let boxes = document.querySelectorAll(".box");

boxes.forEach(e => {
    let color = random_color_rgb();
    let bg_color = random_color_rgb();

    e.style.color = color;
    e.style.backgroundColor = bg_color;
});