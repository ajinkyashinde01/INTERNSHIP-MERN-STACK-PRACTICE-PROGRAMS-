// const test=require("./module")
// console.log("Hello From Node JS")




// const a=require("./module")
// a.add(10,20);
// a.sub(20,10);
// a.mul(5,5);




// const Even = require("./module")

// let array = [10,15,20,25,30,35,40,45];

// Even (array);



// const fileoperations = require("./fileoperation");

// fileoperations();



// const http = require ('http')
// const port = 3000;

// const server = http.createServer((req , res)=>{
//     res.setHeader("content-type","text/html");
//     res.end("<h1>Hello From Node JS</h1>");
// });
// server.listen(port,()=>{
//     console.log(`server is listening on port ${port}`);
// })



const express = require ("express");
const { default: mongoose } = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://ajinkyashinde38641_db_user:UOb7d2cFz4O66zh6@cluster0.7ppulhc.mongodb.net/?appName=Cluster0")

    .then(()=> {
        console.log ("Database Connected");
    })
    .catch((err)=> {
        console.log(err);
    })

// app.get("/",(req,res)=>{
//     res.send("Hello From Express JS");
// })

// app.get("/home",(req,res)=>{
//     res.send("Hello From Home Page");
// })

// app.listen(3000, ()=>{
//     console.log("Server is listening on port 3000");
// })
