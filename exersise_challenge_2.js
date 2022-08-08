// Create a class that represents a Vehicle, it must have at least Two properties and One method. You can decide on the method.
// Create a subclass or "child" class of Car AND Truck.
// Car must have at least One unique property
// Truck must have at least One unique property a& Must include the ability to Tow, with method to "activate 4 wheel drive".
// Must have at least 2 instances of each Class.
// Create 2 subclasses for each subclass. Car --> MiniCar/LargeCar || Truck --> Can Tow/Cannot Tow

class Vehicle {
    constructor(motor, doors, broken) {
        this.motor = motor;
        this.doors = doors;
        this.broken = broken;
    }

    static canDriveOnRoad(vehicle) {
        console.log(vehicle.broken)


        if (vehicle.broken == false) {
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

class MiniCar extends Car {
    constructor(motor, doors, broken, cargoAccess, roofType, origin) {
        super(motor, doors, broken, cargoAccess, roofType);
        this.origin = origin;
    }
}

class LargeCar extends Car {
    constructor(motor, doors, broken, cargoAccess, roofType, forFamily) {
        super(motor, doors, broken, cargoAccess, roofType);
        this.forFamily = forFamily;
    }
}


class Truck extends Vehicle {
    constructor(motor, doors, broken, tow = false, fourWheelDrive = false) {
        super(motor, doors, broken);
        this.tow = tow;
        this.fourWheelDrive = fourWheelDrive;
    }

    toggleFourWheelDrive() {
        this.fourWheelDrive = !this.fourWheelDrive;
        return this.fourWheelDrive ? "4 wheel drive on" : "4 wheel drive off";
    }
}

class oversizedTow extends Truck {
    constructor(motor, doors, broken, tow = true, fourWheelDrive, towBoat) {
        super(motor, doors, broken, tow, fourWheelDrive);
        this.towBoat = towBoat;
    }
}

class neverTow extends Truck {
    constructor(motor, doors, broken, tow = true, fourWheelDrive, solidBumper) {
        super(motor, doors, broken, tow, fourWheelDrive);
        this.solidBumper = solidBumper;
    }
}



const blue = new Vehicle('130 hp', 4, false);
const red = new Vehicle('160 hp', 2, false);

const blueCar = new Car('140 hp', 4, false, "Trunk", "Sun Roof");
const redCar = new Car('200 hp', 2, false, "Hatch", "Drop Top");

const greenTruck = new Truck('350 hp', 2, false, true);
const brokenTruck = new Truck('0 hp', 2, true);

const mini = new MiniCar("100 hp", 2, false, "hatch", "hard top", "Europe");
const large = new LargeCar("180 hp", 8, false, "hatch", "moon roof", "Family");

const bigtow = new oversizedTow("550 hp", 5, false, true, true, true)
const useless = new neverTow("20 hp", 4, false, true, true, true)



console.log(Vehicle.canDriveOnRoad(red))
console.log(Vehicle.canDriveOnRoad(redCar))
console.log(Vehicle.canDriveOnRoad(greenTruck))
console.log(Vehicle.canDriveOnRoad(brokenTruck))

console.log(greenTruck.toggleFourWheelDrive())
console.log(greenTruck.toggleFourWheelDrive())
console.log(greenTruck.toggleFourWheelDrive())
console.log(greenTruck.toggleFourWheelDrive())

console.log(mini)
console.log(large)
console.log(bigtow)
console.log(useless)
