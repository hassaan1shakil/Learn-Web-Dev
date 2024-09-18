async function delay_2_second(msg){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, 2000);
    })
}

(async function main() {
    await delay_2_second("Hello");
    await delay_2_second("World");
    
}) ();