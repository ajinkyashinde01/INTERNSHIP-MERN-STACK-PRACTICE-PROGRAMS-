function getMovie() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let available = true;

            if (available) {
                resolve("Movie found: Inception");
            } else {
                reject("Movie not available");
            }
        }, 2000);
    });
}

getMovie()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Searching for movie...");