# SIgn up and login Using Mearn stack
# Backend setup with Node.js, Express, JWT tokens, bcrypt.js, express-validator, Mongoose, and MongoDB. 
Node.Js: server side Language 
Express.Js:Tools make it easy to build fast, scalable APIs that can handle a wide range of requests and workloads.
JWT Token:For successful authentication, a JWT token is generated and returned, which can be consumed by the app to create a user session.
express-validator:Express middleware used for validate user input
bcrypt.js: For encrypt the password
mongoose:Mongoose module provides several functions in order to manipulate the documents of the collection of the MongoDB database.
Mongo Db: use as a Database

# 1-Setup Project:
Create a new project directory and navigate to it in the terminal.
mkdir Backend
cd Backend
# 2- Initialize Project:
Initialize the project using npm (Node Package Manager).
 npm init
# 3-Install Dependencies:
Run following commend in terminal
npm install express mongoose bcryptjs jsonwebtoken express-validator

# 4-Setting Up Express Server:
Create a index.js file to set up the Express server.

# index.js
const express = require('express'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //The express. json() function is a middleware function used in Express. js applications to 
                         //parse incoming JSON data from HTTP requests, a standard format for data transmission in web servers. 
                         //Suppose we have created an API that sends data in JSON format.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

# 5-Connect to MongoDB:
Create a file  named  db.js file within it to set up the MongoDB connection.
For mongoDb connection you must have connection string of mongoDB
If you have problem go this video [https://www.youtube.com/watch?v=oVHQXwkdS6w&ab_channel=IAmTimCorey](https://www.youtube.com/watch?v=QyYMvdFwBKA&ab_channel=ProgrammingExperience)https://www.youtube.com/watch?v=QyYMvdFwBKA&ab_channel=ProgrammingExperience
Make sure password is simple means no special symbol like asdewqc123 , don't set password like @3hdf7%$&*ygjkh

# Db.js
const mongoose= require("mongoose");

const uri=mongodb://localhost:27017/nodejs-auth;
const connectionParams={ 
   useNewUrlParser: true, 

   useUnifiedTopology: true
} 

const ConnectToMongoose=async()=>{
   const conn= await mongoose.connect(uri,connectionParams);
   if(conn){
    console.log('coonect successfully')
   }
}

module.exports=ConnectToMongoose;

# 6-Create User Schema and Model
Create a models folder and within models folder  create a UserSchema.js file to define the user schema using Mongoose.
schemas and models is a defining the structure and behavior of your data. 

# models/UserSchema.js

const mongoose = require("mongoose")
const {Schema}=mongoose;
const UserSchema =  new Schema({
    name: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true,
       
    }, date: {
        type: Date,
        default:Date.now

    },   
})
const User=mongoose.model("user",UserSchema) // create the model User Model using UserSchema
module.exports=User

# 7: Connect express server to mongodb database
# index.js

# const ConnectToMongoose=require('./db');
const express=require('express');
# const cors = require('cors')
const app=express();
// Use cors middleware to enable CORS for all routes
app.use(cors())
app.use(express.json())
# ConnectToMongoose();
app.listen(5500|| 8000)




# 8-Create a router for User 

# index.js
const ConnectToMongoose=require('./db');
const express=require('express');
const cors = require('cors')
require('dotenv').config()

const app=express();
app.use(cors())
app.use(express.json())
ConnectToMongoose();
# app.use("/api/auth", require('./routes/auth'))
app.listen(process.env.PORT|| 8000)

# 9-Create Route for user
Crete a Route file in root dir and with that create a auth.js 

# Route/auth.js

const express=require('express')
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const JWT_SECRET = "ramisa@good$boy"

// --------------------------Route1-----------------------------
//Create a user /api/auth/createuser ,No login Required

router.post('/createuser',async(req,res)=>{
  try {
    const {name,email,password}=req.body;
  if(!name|| !email || !password){
    return res.status(422).json({error:'please fill details',success:false})
  }
  
  const checkUser=await User.findOne({email:email})
  if(checkUser){
    return res.status(422).json({error:'user already exist',success:false})
  }
   //hash password
  const salt = await bcrypt.genSalt(10);
  let secpass = await bcrypt.hash(password, salt);
  
  const user=new User({email,password:secpass,name})
  const Save= await user.save();
  if(Save){
  const data = {
    user: {
      id: user.id
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET);
  res.json({ authtoken })
  
  }
  } catch (error) {
    return res.status(500).json({message:error,success:false})
  }
})


// --------------------------Route2-----------------------------
//Login  /api/auth/login ,No login Required

router.post('/login',async(req,res)=>{
try {
    const {email,password}=req.body;
    if( !email || !password){
      return res.status(422).json({error:'please fill details',success:false})
    }
    //email check
    const user=await User.findOne({email})
    if(!user){
      return res.status(422).json({error:'invalid user',success:false})
    }
//password check
    const passCheck= await bcrypt.compareSync(password,user.password);
    if( !passCheck){
      return res.status(422).json({error:'invalid user',success:false})
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success=true;
   return  res.json({success:true, authtoken })
  
   
    return res.status(200).json({message:"login successfully",success:true})
} catch (error) {
  return res.status(500).json({message:error,success:false})
}
})

module.exports = router;

