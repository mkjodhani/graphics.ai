const express = require('express')
const app = express();
app.get("/proxy",(req,res,next) =>{
    res.send("<p>Home  0 00 0 0 00  00 Page</p>")
})
app.listen(4242,()=>{
    console.log("listening on the port 4242");
})