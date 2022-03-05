const { Schema, model,connect } = require('mongoose');
connect("mongodb://localhost/Certificates",{useNewUrlParser: true, useUnifiedTopology: true})
const userSchema = new Schema({
    displayName: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    userType: {
        type: String,
        unique: true
    },
    tel: {
        type: String,
        unique: true
    },
    profile: {
        type: String,
        default: ''
    },
    DOB: {
        type: Date,
    },
    authorized: {
        type: Boolean,
        default: true //after mail authentication it will be false
    }
})
exports.Users = model("User", userSchema)