var express = require('express');
var router=express.Router();

router.get('/module2',(req,res)=>{
    console.log("This is module2")
    res.send("This is module2")
});

module.exports=router;