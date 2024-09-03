async function three_seconds(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("3 seconds are up!");
        }, 3000);
    })
}

async function main(){

    try {
        let result = await three_seconds();

    } catch (error) {
        console.log(error);
    }
}

main();