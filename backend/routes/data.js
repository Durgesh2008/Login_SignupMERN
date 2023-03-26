const express=require('express')
const router = express.Router();
const Data = require("../models/dataSchema");
router.get('/getdata',async(req,res)=>{
 try {
    const data=await Data.find();
    res.json({data})
    console.log('success')
 } catch (error) {
    res.json(error)
 }

})

module.exports = router;