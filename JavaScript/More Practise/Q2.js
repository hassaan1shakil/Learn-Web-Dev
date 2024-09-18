function average(...rest){
    let sum = 0;
    i = 0;
    for (i = 0; i < rest.length; i++){
        sum += rest[i];
    }

    return (sum / i);
}

array = [1,2,3,4,5,6,7,8,9,10];

let avg = average(...array);
console.log(avg);