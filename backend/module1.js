var express = require('express');
var router=express.Router();

router.get('/module1',(req,res)=>{
    console.log("This is module1")
    res.send("This is module1")
})

module.exports=router;