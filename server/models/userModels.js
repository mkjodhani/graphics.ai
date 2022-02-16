const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    displayName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true,
        default:''
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    userType:{
        type:String,
        required:true
    },
    authorized:{
        type:Boolean,
        required:true,
        default:false
    }
})
exports.Users = model("User",userSchema)