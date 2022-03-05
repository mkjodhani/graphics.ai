const { Schema, model,connect } = require('mongoose');
connect("mongodb://localhost/Certificates",{useNewUrlParser: true, useUnifiedTopology: true})
const certificateSchema = new Schema({
    certificateId:{
        type:String,
        unique:true
    },
    userId:{
        
    }
})