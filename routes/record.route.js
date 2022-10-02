const express = require("express");
const router=express.Router()
const recordController=require('../controller/record.controller');
const uploader = require("../middlewar/uploadFile");


router.route('/')
.get(recordController.getRecord)
.post(recordController.createRecord)
router.route('/:id')
.patch(recordController.updateRecord)
.delete(recordController.deleteRecord)

module.exports=router;