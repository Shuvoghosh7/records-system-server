const express = require("express");
const router=express.Router()
const recordController=require('../controller/record.controller');



router.route('/')
.get(recordController.getRecord)
.post(recordController.createRecord)
/* router.route('/:id')
.patch(recordController.updateProduct)
.delete(recordController.deleteProduct) */

module.exports=router;