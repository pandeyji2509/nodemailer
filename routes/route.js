const router=require('express').Router();

const {getbill} =require('../controller/appController.js');

// router.post('/user/signup',signup);
router.post('/product/getbill',getbill);
module.exports=router;
