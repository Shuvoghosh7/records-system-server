const mongoose = require("mongoose");
const validator = require('validator');


const recordSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true,
        unique:[true,"Plese Provide Brand Name"],
        maxLength:100,
        lowercase:true
    },
    email:{
        type:String,
        lowercase:true,
        validator:[validator.isEmail,"Plese provide a valid Email"]
    },
    website:{
        type:String,
        validator:[validator.isURL,"Plese provide a valid url"]
    },
    address:String,   
},{
    timestamps: true
})


const Record = mongoose.model('Record', recordSchema);

module.exports=Record;