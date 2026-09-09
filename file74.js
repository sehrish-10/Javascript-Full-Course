class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}

const student1 = new Student("Sehrish", 21);

student1.introduce();