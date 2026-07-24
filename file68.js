// USING PROTOTYPE
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello " + this.name);
};
const p1 = new Person("Sehrish");
const p2 = new Person("Ahmed");

p1.greet();
p2.greet();