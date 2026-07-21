const fs = require("fs")

function fileoperations()  {
    //Read Write
    console.log("File operations started.....");
    fs.writeFile("file1.txt","data write from file operation file",()=>{
        console.log("data written to file");
    })
    console.log("file operations ended......");
}

module.exports=fileoperations;
