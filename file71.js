// CLASS PRACTICE

class Student {

    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    study() {
        console.log(this.name + " is studying.");
    }

}

const s1 = new Student("Sehrish",101);

s1.study();