// CLASS KEYWORD
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }

}

const p1 = new Person("Sehrish");

p1.greet();