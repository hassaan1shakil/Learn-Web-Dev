class Password {

    constructor(length) {

        if (length < 8)
            length = 8;
    
        // Generating Indexes
    
        let lower_case_index;
        let upper_case_index;
        let special_case_index;
    
        lower_case_index = generate_random(0, length - 1);
        // console.log(lower_case_index);
    
        do {
            upper_case_index = generate_random(0, length - 1);
    
        } while (upper_case_index == lower_case_index);
    
        // console.log(upper_case_index);
    
        do {
            special_case_index = generate_random(0, length - 1);
    
        } while (special_case_index == lower_case_index || special_case_index == upper_case_index);
    
        // console.log(special_case_index);
    
    
        // Generating Special Characters
    
        let password = "";
    
        for (let i = 0; i < length; i++) {
    
            if (i == lower_case_index)
                password += (String.fromCharCode(generate_random(97, 122)));
    
            else if (i == upper_case_index)
                password += (String.fromCharCode(generate_random(65, 90)));
    
            else if (i == special_case_index)
                password += (String.fromCharCode(generate_random(33, 47)));
    
            else
                password += (String.fromCharCode(generate_random(33, 126)));
        }
    
        this._pass = password;
    }

    get pass(){
        return this._pass;
    }
}

// Class Implementation

let spotify_pass = new Password(20);
console.log("Spotify Password: " + spotify_pass._pass);

function generate_random(min, max) {

    return Math.floor(min + (Math.random() * (max - min + 1)))
}

function generate_password(length = 8) {

    if (length < 8)
        length = 8;

    // Generating Indexes

    let lower_case_index;
    let upper_case_index;
    let special_case_index;

    lower_case_index = generate_random(0, length - 1);
    // console.log(lower_case_index);

    do {
        upper_case_index = generate_random(0, length - 1);

    } while (upper_case_index == lower_case_index);

    // console.log(upper_case_index);

    do {
        special_case_index = generate_random(0, length - 1);

    } while (special_case_index == lower_case_index || special_case_index == upper_case_index);

    // console.log(special_case_index);


    // Generating Special Characters

    let password = "";

    for (let i = 0; i < length; i++) {

        if (i == lower_case_index)
            password += (String.fromCharCode(generate_random(97, 122)));

        else if (i == upper_case_index)
            password += (String.fromCharCode(generate_random(65, 90)));

        else if (i == special_case_index)
            password += (String.fromCharCode(generate_random(33, 47)));

        else
            password += (String.fromCharCode(generate_random(33, 126)));
    }

    return password;
}

// Simple Implementation

let password = generate_password(100);
console.log("Password: " + password);