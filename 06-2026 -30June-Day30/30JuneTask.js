function getMarks() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let A = false;
            if (A) {
                resolve("Your marks are 85");
            }
            else {
                reject("Server Down");
            }
        }, 2000);
    });
}

getMarks()
    .then((result) => {
        console.log(result);
    });

console.log("Waiting for marks");