// OBJECT.CREATE()
const personMethods = {
    greet() {
        console.log("Hello " + this.name);
    }
};

const person = Object.create(personMethods);

person.name = "Sehrish";

person.greet();