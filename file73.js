const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data received!");
    } else {
        reject("Something went wrong!");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));