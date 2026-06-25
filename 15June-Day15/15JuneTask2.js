// let array=[10,20,30,40,50,60,61,81];
// array.forEach((val)=>{
//     if(val%2 == 0){
//         console.log(val)
//     }
   
// })

// let array=[10,20,30,40,50,60,61,81];
// let sum=0;
// array.forEach((val)=>{
//     if(val%2 == 0){
//         sum=sum+val;
//     } 
// })
// console.log(sum)

// let arr =[1,2,3,4,5,6];
// let mul =3
// let result = arr.map((val)=>{
//     return val*mul;
// })
// console.log(result)

// let result1 = result.filter((val)=>{
//     return val%2 != 0;
// })
// console.log(result1)

// let result2 = result1.reduce((current,next)=>current*next)
// console.log(result2);

let arr = [1, 2, 3, 4, 5];
let mul = 1;

mul = arr.map((val) => val * 3);
mul = mul.filter((val) => val % 2 != 0);
mul = mul.reduce((total, val) => total * val, 1);

console.log(mul);

