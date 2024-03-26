// This is the entry point of react express js.

var express = require('express'); //Import the  express library
// var cors=require('cors');

var app = express() //called express method which returns the app object
var PORT=8000;

var Mod1 = require('./module1');//Import diffrect module for redirection
var Mod2 = require('./module2'); 

// app.use(cors()); //Use is used for middleware

const mdw1 = (req,res,next)=>{
    console.log("This is middlewire 1");
    next();
}

const mdw2 = (req,res,next)=>{
    console.log("This is middle wire 2");
    next();
}

// app.use(mdw1); 

app.use('/practice',Mod1); //Using routing
app.use('/practice2',Mod2)

app.get('/',(req,res)=>{ //Applying get method
    res.type('text/plain'); //type of the data 'text/plain'
    // res.status();// 200,404,500 etc
    res.send("Hello Server buddy");//Data you want to show.
})

// app.use(mdw2);
app.get('/about',mdw2,(req,res)=>{ //Method to use middlewire
    res.type('text/plain');
    res.send("Hello Server buddy this is about page");
})

app.listen(PORT,()=>{ //On which port you wnats to run the server. Second parameter is a callback function that will be executed
    console.log("Server is running on port") 
})

//middleware is a function
//typical middleware function
// (req,res,next)=>{
   // next() //optional parameter
// }