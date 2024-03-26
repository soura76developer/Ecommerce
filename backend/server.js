const mongoose=require('mongoose');
const express = require('express');

//Initiatize the objects
const url="mongodb://localhost:27017/company";
const app=express();

//Create teh connection
mongoose.connect(url).then(()=>{
    console.log("connected To database")
    app.listen(3003,()=>{
        console.log("Server is running on port  3003");
      })
}).catch(()=>{
    console.log("Not Connected To database")
})
//.then() will handle the data we wants to display .catch() will display the the error if it occurs

//Create the structure of the data base
const car = new mongoose.Schema({
        // _id:String,
        car_model:Number,
        color: String,
        price: Number,
        owner: String,
        m_year: String,
        company_name: String
      }
)
//Create  a model from the schema or the actual table
const Car_data=mongoose.model("cars",car); //("name_of_collection_in_side_the_database",schema just created)

app.use(express.json()); //This is a middle ware and it is need to read the json file in post api.

//create a async get api to fetch data from database
app.get('/',async (req,res)=>{
    try{
        const Car_data_product=await Car_data.find({}); //Model_name.find({}) for all the document inside the collection keep it in a variable
        res.status(200).json(Car_data_product);// Return the success msg,and the data inside json format. 
    }catch(err){
        res.status(500).json({message:err.message});
    }
})
