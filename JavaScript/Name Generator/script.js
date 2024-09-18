let adjectives = {
    1: "Serene",
    2: "Fragile",
    3: "Astounding",
    4: "Melodic",
    5: "Tantalizing",
    6: "Vigilant",
    7: "Eerie",
    8: "Voracious",
    9: "Exquisite",
    10: "Breezy",
    11: "Nostalgic",
    12: "Cumbersome",
    13: "Eloquent",
    14: "Wondrous",
    15: "Brittle",
    16: "Enthusiastic",
    17: "Perplexing",
    18: "Pristine",
    19: "Menacing",
    20: "Vivacious"
};

let shop = {
    1: "Motor",
    2: "Cuisine",
    3: "Ensemble",
    4: "Fuel",
    5: "Diet",
    6: "Attire",
    7: "Combustion",
    8: "Dish",
    9: "Wardrobe",
    10: "Transmission",
    11: "Ingredient",
    12: "Accessory",
    13: "Cylinders",
    14: "Recipe",
    15: "Style",
    16: "Spark Plug",
    17: "Pantry",
    18: "Suitcase",
    19: "Horsepower",
    20: "Utensil"
};

let misc = {
    1: "Corp",
    2: "PLC",
    3: "LLP",
    4: "LP",
    5: "Stiftung",
    6: "Société Anonyme",
    7: "NV",
    8: "Pty Ltd",
    9: "AG",
    10: "S.p.A.",
    11: "BV",
    12: "Ltd.",
    13: "SARL",
    14: "GmbH",
    15: "A/S",
    16: "となえる株式会社",
    17: "合作社",
    18: "Incorporated",
    19: "Limited",
    20: "Partnership"
};

function random_number(min, max) {

    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function name_generator() {

    let random = random_number(1, 20);
    string1 = adjectives[random];

    random = random_number(1, 20);
    string2 = shop[random];

    random = random_number(1, 20);
    string3 = misc[random];

    return string1.concat(" ", string2, " ", string3);
}

function output_name() {
    document.getElementById("biz-name").innerHTML = name_generator();
}

business_name = name_generator();
console.log(business_name);

document.button