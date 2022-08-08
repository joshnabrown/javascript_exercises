function greeting(){
    return "Hi there!";
    }

var greetingTwo = function () {
    return 'Hi there again';
    };
    
    console.log(greeting());
    console.log(greetingTwo());

    
var age = 4;

if (age <= 10) {
    var buildMenu = function () {
    return "Kids' Menu";
    };

    function wrongMenuBuilder () {
    return "Wrong Kids' Menu";
    }

    console.log(buildMenu());
    console.log(wrongMenuBuilder());
}

function sample(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
    }
    
    sample();

    
function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));
