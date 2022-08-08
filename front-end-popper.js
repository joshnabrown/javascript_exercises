// ------------ My Code

function togglePop(array, i) {

  return i % 2 == true ? array.pop(array) : array. shift (array);
}

const array = [10, 20, 30, 40, 50, 60, 70]
permLength = array.length

for (let i = 0; i < permLength; i++) {
  console.log(togglePop(array, i));
}



// --------------------- Jordans Code
class ArrayPopper {
    constructor(arr) {
      this.arr = arr;
      this.atBeginning = true;
    }
  
    togglePopper() {
      this.atBeginning = !this.atBeginning;
      return this.atBeginning ? this.arr.pop() : this.arr.shift();
    }
  }
  
  const ap = new ArrayPopper([1, 2, 3, 4, 5]);
  
  ap.togglePopper(); //?
  ap.togglePopper(); //?
  ap.togglePopper(); //?
  ap.togglePopper(); //?
  ap.togglePopper(); //?
  ap.togglePopper(); //?
