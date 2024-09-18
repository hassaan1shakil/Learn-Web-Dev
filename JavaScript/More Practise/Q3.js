async function custom_promise(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("Resolved After", n , "seconds.");
        }, n*1000);
    })
}

(async function main(){
    await custom_promise(3);
}) ()