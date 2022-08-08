// Three arrays that has something done to them - Josh Souter-Brown

const numbers = [12, 23, 34, 45]
const cars = ["honda", "toyota", "ford", "chevy"]
const players = ["Altuve", 'Bregman','Correa','Springer']

for (let i = 0; i < players.length; i++) {
    console.log(players[i] + " is " + players[i].length + " characters long");
}

for (number in numbers) {
    console.log(numbers[number]);
    numbers[number] += 5;
    console.log(numbers[number]);
}

for (let i = 0; i < cars.length; i++) {
    console.log(players[i].toUpperCase() + " owns " + numbers[i] + " " + cars[i].charAt(0).toUpperCase() + cars[i].slice(1) + "s");
}