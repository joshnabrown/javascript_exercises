class Instructor {
    constructor({ name, role = 'Assistant' }) {
        this.name = name;
        this.role = role;
    }

    renderDetails() {
        return (`${this.name}: ${this.role}`)
    }

    // Base case static method
    static helloWorld() {
        console.log('Hi there');
    }

    // Static method
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }

}

const jon = new Instructor({ name: 'Jon Snow' });
const brayden = new Instructor({ name: 'Brayden', role: 'Teacher' })









console.log(jon);
console.log(jon.renderDetails());
console.log(brayden.renderDetails());

let jonathon = new Instructor({ 'name': 'Jon' });
jon.helloWorld;


console.clear();

class Utensil {
    constructor(color, typeOfPoint) {
        this.color = color;
        this.typeOfPoint = typeOfPoint;
    }

    static hasLength(obj) {
        return obj.length ? 'has a length property.' : 'Does not have a length.';
    }
    canWrite() {
        return 'You have written something down.';
    }
}

const utensil = new Utensil('grey', 'fine');
const utensil2 = new Utensil('red', 'sharp');

class Pen extends Utensil {
    constructor(color, typeOfPoint, ink, clicky) {
        super(color, typeOfPoint);
        this.ink = ink;
        this.clicky = clicky;
    }
}

const pen1 = new Pen('black', 'fine', 'unleaded', true);

class MiniPen extends Pen {
    constructor(color, typeOfPoint, ink, clicky, length) {
        super(color, typeOfPoint, ink, clicky);
        this.length = length;
    }
}

const miniPen = new MiniPen('purple', 'sharp', 'leaded', false, '6 inches');
// console.log(utensil.clicky);
// console.log(pen1.clicky);
console.log(Utensil.hasLength(pen1));

