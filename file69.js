// HASOWNPROPERTY()

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {};
const p1 = new Person("Sehrish");
console.log(p1.hasOwnProperty("name"));
