async function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey from Timeout1");
            resolve("Resolving promise1...");

        }, 3000);

    })
};

async function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey from Timeout2");
            resolve("Resolving promise2...");

        }, 3000);

    })
};

async function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey from Timeout3");
            resolve("Resolving promise3...");

        }, 3000);

    })
};

async function main() {

    // Promise.all --> Great for Parallel Execution && Performance Boost

    console.time('Promise.all');

    try {
        const [result1, result2, result3] = await Promise.all([promise1(), promise2(), promise3()]);
        console.log('Results from Promise.all:', result1, result2, result3);

    } catch (error) {
        console.error('Error in Promise.all:', error);
    }

    console.timeEnd('Promise.all');

    // Sequential Await --> Great for Order Preservation && Custom Errors && Dependent Tasks

    console.time('Sequential Await');

    try {
        const result1 = await promise1();
        const result2 = await promise2();
        const result3 = await promise3();
        console.log('Results from sequential await:', result1, result2, result3);

    } catch (error) {
        console.error('Error in sequential await:', error);
    }

    console.timeEnd('Sequential Await');
}

main();