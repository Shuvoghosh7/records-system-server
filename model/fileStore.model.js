const mongoose = require("mongoose");
const validator = require('validator');


const fileSchema = mongoose.Schema({
    imgPath:{
		type:String,
        require:true
	}
    
},{
    timestamps: true
})


const File = mongoose.model('File', fileSchema);

module.exports=File;