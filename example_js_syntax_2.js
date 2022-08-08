const user = { name: "Josh" } //one key pair
console.log(user.name);

user.name = "Stormi"; // reassigns name variable
console.log(user.name);

const user2 = { // object (dictionary)
    name: "Josh",
    age: 43,
    city: "Fuquay-Varina",
    grades: {
        math: 100,
        science: 98,
        launguageArts: 97
    }
}

user.grades.coding = 99; //adds to object at runtime
user[grades[coding]] = 97; //bracket works like dots   ??

console.log(user2.grades.math); //prints out math grade

typeof 12; // returns "number". works for each datatype

