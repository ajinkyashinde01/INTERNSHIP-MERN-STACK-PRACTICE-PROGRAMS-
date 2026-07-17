function getSong() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let available = true;

            if (available) {
                resolve("Song found: Shape of You");
            } else {
                reject("Song not available");
            }
        }, 2000);
    });
}
getSong()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Searching for song...");