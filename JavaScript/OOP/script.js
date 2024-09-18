// let animal = {

//     eats: true,
//     sleeps: true
// };

// let rabbit = {

//     jumps: true
// }

// rabbit.__proto__ = animal;

class Vehicle{

    constructor(license_plate){

        this._registration = license_plate;
        this.total_veh

        console.log("Vehicle with Registration No:", this.registration, "registered");
    }

    get registration(){

        return this._registration;
    }

    set registration(new_regis){

        this._registration = new_regis;
    }

    start() {

        console.log("Vehicle is starting...")
    }

    static decommission(){

        console.log("All Vehicles Destroyed!")
    }
}

class Car extends Vehicle{

    constructor (license_plate, speed){

        super(license_plate);
        this._top_speed = speed;
        console.log("Top Speed", this._top_speed);
    } 

    start() {

        console.log("Car is ready for the race...")
    }
}


bedford = new Vehicle("AJK-255");
console.log(bedford.registration);

bedford.registration = "AJT-258";
console.log(bedford.registration);

bedford.start();
Vehicle.decommission();

console.log(bedford instanceof Vehicle);
console.log(bedford instanceof Car);



corolla = new Car("LEE-13-922", "180");
corolla.start();

console.log(corolla instanceof Vehicle);
console.log(corolla instanceof Car);