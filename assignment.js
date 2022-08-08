function growing_list(numbers, maximum) {
    for (let i = 0; i < maximum; i++) {
        numbers.push(i+1)
        console.log(numbers)
    }
}



const numbers = [];
const maximum = 7;


growing_list(numbers, maximum)