// Create a car object, add a color property to it with the value equals 'black'
let car = {};
car.color = 'black';

// Change the color property of the car object to 'green'
car.color = 'green';

// Add the power property to the car object, 
// which is a function and displays the engine power to the console
car.power = function () {
    console.log('Engine power: 3.5L V6');
}

car.power();

// Pears and apples are accepted to the warehouse, 
// write a function that returns the result of adding the number of accepted pears and apples
function calcFruitsAmount(pears, apples) {
    return pears + apples;
}

console.log(calcFruitsAmount(400, 600));

// Your name is saved in the payment terminal, 
// write a function to define the name in the terminal 
// (if you entered your name, then hello + name, if not, then there is no such name)
const terminalName = 'Konstantin';

function getTerminalName(name) {
    return name === terminalName ? 'Hello ' + name : 'No such name';
}

console.log(getTerminalName('Konstantin'));

// Write a function for calculating the type of argument and type output to the console
function getArgumentType(argument) {
    console.log(typeof argument);
    return typeof argument;
}

getArgumentType(123);

// Write a function that determines whether a number is prime or not
function checkNumberPrimes(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}

console.log(checkNumberPrimes(77));