//file module:fs module in node js
//CRUD operation: create, read, update,delete
// //create a file:writefile() and readfile()
// const fs=require('fs');
// fs.writeFile('myfile.txt', 'this is create command in fs using writeFile',(error)=>{
//     if(error ) throw error;
//     console.log("file successfully created");
// })
// const fs=require('fs');
import fs from "fs";
fs.readFile('myfile.txt', 'UTF-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})
