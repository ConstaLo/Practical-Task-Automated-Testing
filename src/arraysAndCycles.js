// Given an array consisting of movie names, 
//iterate over the array with the output of the names of each movie to the console
const nameMovies = ['Terminator', 'Troy', 'Gladiator', 'The Matrix', 'Men in Black', 'Interstellar'];

// nameMovies.forEach(name => console.log(name));

function getNameMovies(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}

getNameMovies(nameMovies);

// Given an array of car manufacturers, convert the array to a string and back to an array
const carManufactures = ['BMW', 'Audi', 'Mercedes', 'Porsche', 'Volkswagen', 'Ford', 'Opel'];

const carManufacturesStr = carManufactures.join(', ');
console.log(carManufacturesStr);

const carManufacturesArray = carManufacturesStr.split(', ');
console.log(carManufacturesArray);

// Given an array of the names of your friends, add the words hello to each element of the array
let myFriends = ['Maxim', 'Dmitri', 'Nick', 'Igor'];
myFriends = myFriends.map(name => name + ' hello');
console.log(myFriends);

// Convert numeric array to Boolean
let numericArray = [0, 1, 2, 0, 3, 0, 4, 5];
numericArray = numericArray.map(num => !!num);
console.log(numericArray);

// Sort the array [1,6,7,8,3,4,5,6] in descending order
const someArray = [1, 6, 7, 8, 3, 4, 5, 6];
someArray.sort((a, b) => b - a);
console.log(someArray);

// Filter array [1,6,7,8,3,4,5,6] by value> 3
const someArrayFiltered = someArray.filter(value => value > 3);
console.log(someArrayFiltered);

// Write a function that takes two parameters - 
//an array and a number and outputs the index of an array element equal to a number
let randomArray = [1, 6, 2, 12, 2, 1, 3, 4, 9, 5, 7, 10, 2];

function getIndexOfArray(array, number) {
    let index = array.findIndex(item => item == number);
    return index
}

console.log(getIndexOfArray(randomArray, 3));

function getIndexOfArrayV2(array, number) {
    index = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) index.push(i);
    }
    return index.join(', ');
}

console.log(getIndexOfArrayV2(randomArray, 2));

// Implement a loop that will print the number 'a' until it is less than 10
for (let a = 0; a < 10; a++) {
    console.log(a);
}

// Implement a loop that prints prime numbers to the console
function isNumberPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function getNumberPrimes (n) {
    for (let i = 2; i <= n; i++) {
        if (isNumberPrime(i)) console.log(i);
    }
}

getNumberPrimes(10);

// Implement a loop that prints odd numbers to the console
function getOddNumber(number) {
for (let i = 1; i <= number; i++) {
    if (i % 2 != 0) console.log(i);
}
}

getOddNumber(10);