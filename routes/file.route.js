const express = require("express");
const router=express.Router()
const recordController=require('../controller/fileController');
const uploader = require("../middlewar/uploadFile");


router.route('/file-uploads')
.post(uploader.array('image'), recordController.fileUpload)

module.exports=router;