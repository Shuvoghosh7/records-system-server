const express = require("express");
const router=express.Router()
const productController=require('../controllers/product.controller');
const uploader = require("../middlewar/uploder");


router.route('/')
.get(productController.getController)
.post(productController.createProduct)
router.route('/:id')
.patch(productController.updateProduct)
.delete(productController.deleteProduct)

module.exports=router;