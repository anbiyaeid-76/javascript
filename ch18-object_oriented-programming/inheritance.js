class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Create a Dog object
let dog = new Dog("Max", 3, "Golden Retriever");

console.log(dog.name);
console.log(dog.age);
console.log(dog.breed);

dog.eat();
dog.bark();