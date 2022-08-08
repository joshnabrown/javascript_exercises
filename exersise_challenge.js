//Create a function that compares the first and last of two separate arguments and
//returns true if both are the same and false if they are not


function first_and_last(str1, str2) {
    if (([...str1].pop() === [...str2].pop()) && ([...str1].shift() === [...str2].shift()))
        return true;
    return false;
}

str1 = "Hello";
str2 = "Have some Jello";


console.log(first_and_last(str1, str2));
