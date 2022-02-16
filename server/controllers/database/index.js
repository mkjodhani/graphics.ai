const mongoose = require('mongoose');
module.exports = {
    connectDataBase: async ()=>{
        console.log(process.env.DB_NAME);
        return await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
    }
}