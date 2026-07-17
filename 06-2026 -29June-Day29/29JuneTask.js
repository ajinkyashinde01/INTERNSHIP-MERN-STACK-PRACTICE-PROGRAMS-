//Destructred nested object:
let obj1 = {
    key1: "val1",
    key2: {
        key3: "val3",
        key4: "val4"
    }
};

let { key1, key2: { key3, key4 } } = obj1;

console.log(key1); 
console.log(key3);
console.log(key4);

console.log(obj1.key2.key4);


// Destructred nested array:
let arr1 = [10, [20, 30], [50, 60, [70, 80]]];
let [a, b, [c, d, [e, f]]] = arr1;

console.log(a); 
console.log(b); 
console.log(f); 

console.log(arr1[2][2][1]); 