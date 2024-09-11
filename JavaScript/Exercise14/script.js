function generateRandomTime() {
    let time = Math.floor(1 + Math.random() * 7);
    // console.log(time);
    return time;
}

async function addDots(element) {

    return new Promise((resolve, reject) => {

        let time = generateRandomTime();

        let count = 0;
        let og_html = element.innerHTML;        // preserving original html
        element.style.visibility = "visible";

        let interval = setInterval(() => {

            if (count == 3) {
                count = 0;
                element.innerHTML = og_html;
            }

            element.innerHTML = element.innerHTML + ".";
            count++;

        }, 1000);

        setTimeout(() => {

            clearInterval(interval)
            element.innerHTML = og_html;    // restoring original html

            resolve("Done");        // This resolve was messing up everything

        }, time * 1000);
    });
}

async function animateTerminal(element_name) {

    let array_elements = document.querySelectorAll(element_name);
    let result;

    for (const i of array_elements) {
        result = await addDots(i);
    }

    return result;
}

async function main() {

    let x = await animateTerminal(".line");
}

main();