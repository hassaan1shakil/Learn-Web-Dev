async function loadJS(file_source) {
    return new Promise((resolve, reject) => {

        if (!file_source) { // (!file_source) works too
            reject(new Error(`Invalid Script Path: ${file_source}`));
        }

        else {

            let script = document.createElement("script");
            script.src = file_source;

            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load script: ${file_source}`));

            document.head.append(script);
        }
    });
}

async function main() {

    try {
        let test = await loadJS("promise.js");
        alert("Script Loaded Successfully");
        
    } catch (error) {
        
        console.log(error);
    } finally{
        
        alert("All Operations Completed!")
    }
}

main();