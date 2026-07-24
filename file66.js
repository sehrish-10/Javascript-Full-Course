// STORE METHOD IN DIFFERENT OBJECT

const personMethods = {
    greet: function () {
        console.log("Hello " + this.name);
    }
};