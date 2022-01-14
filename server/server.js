const express = require('express');
const apiRouter = require('./res/routers/api')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.static(__dirname+ "/public"))
app.use('/api',apiRouter)
app.get('/',(req,res) =>{
    res.json({
        status:"ACCEPT"
    })
})
app.listen(process.env.PORT,() =>{
    console.log("Server is up and running on http://localhost:4242");
})