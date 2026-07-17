//Nested object 
// using for in loop

let student = {
    rahul : {
        marks:49,
    },
    sumit : {
        marks:89,
    },
    aman : {
        marks:99
    }
}
for(let key in student) {
    console.log(key,":" ,student[key]);
    for(let subkey in student[key]){
        console.log(subkey.rahul)
    }
}