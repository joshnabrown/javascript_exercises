// Same function written as function declaration
function fullName(fName, lName) {
    console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
fullName = (fName, lName) => {
    console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');



// building a average function

// const getAverage = arr => {
//     const reducer = (total, currentValue) => total + currentValue;
//     const total = arr.reduce(reducer);
//     return total / arr.length;
// };

// const arr = [1, 2, 3, 4, 5, 6];

// getAverage(arr);

const getAverage = arr => {arr.reduce((total, currentValue) => total + currentValue) / arr.length;};

const arr = [1, 2, 3, 4, 5, 6];

getAverage(arr);//?
