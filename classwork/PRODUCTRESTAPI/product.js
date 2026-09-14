const express = require("express")
const app= express();

let product=
[
{ name: "veron",
 price: 24000,
 year: 2006
},{
    name: "maruti",
    price: 35000,
    year: 2016
}

]

app.get("/",(req,res)=>{
    res.end("Hello world")
})


app.listen(8000,()=>{
    console.log("server is runingg")
})
