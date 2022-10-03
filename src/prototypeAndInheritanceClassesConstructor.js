// Create 2 objects: animal and cat, add move property to animal object, 
// cat object must inherit move property from object animal
class Animal {
    constructor(name) {
        this.distance = 0;
        this.name = name;
    }
    move(distance) {
        this.distance += distance;
        console.log(`${this.name} walked a distance of ${this.distance} meters.`);
    }
}

class Cats extends Animal {
    hungry() {
        console.log(`${this.name} wants to eat.`);
    }
}

const fluffyCat = new Cats("Barsik");

fluffyCat.move(15);
fluffyCat.move(5)
fluffyCat.hungry();
console.log(fluffyCat);