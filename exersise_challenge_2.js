// Create a class that represents a Vehicle, it must have at least Two properties and One method. You can decide on the method.
// Create a subclass or "child" class of Car AND Truck.
// Car must have at least One unique property
// Truck must have at least One unique property a& Must include the ability to Tow, with method to "activate 4 wheel drive".
// Must have at least 2 instances of each Class.


class Vehicle {
    constructor(motor, doors, broken) {
        this.motor = motor;
        this.doors = doors;
        this.broken = broken;
    }

    static canDriveOnRoad(running) {
        console.log(running.broken)


        if (running.broken == false) {
            return 'You are driving on the road.'
        }
        return 'You can\'t go anywhere'

    }
}

class Car extends Vehicle {
    constructor(motor, doors, broken, cargoAccess, roofType) {
        super(motor, doors, broken);
        this.cargoAccess = cargoAccess;
        this.roofType = roofType;
    }
}

class Truck extends Vehicle {
    constructor(motor, doors, broken, tow,) {
        super(motor, doors, broken);
        this.tow = tow;
    }

    fourWheelDriveOn() {
        return 'Four wheel drive activated.';
    }
}


const blue = new Vehicle('130 hp', 4, false)
const red = new Vehicle('160 hp', 2, false)

const blueCar = new Car('140 hp', 4, false, "Trunk", "Sun Roof")
const redCar = new Car('200 hp', 2, false, "Hatch", "Drop Top")

const greenTruck = new Truck('350 hp', 2, false, 'Can Tow')
const brokenTruck = new Truck('0 hp', 2, true, 'Can\'t tow')

console.log(Vehicle.canDriveOnRoad(red))
console.log(Vehicle.canDriveOnRoad(redCar))
console.log(Vehicle.canDriveOnRoad(greenTruck))
console.log(Vehicle.canDriveOnRoad(brokenTruck))
