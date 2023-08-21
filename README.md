# SIgn up and login Using Mearn stack  <br />
# Backend setup with Node.js, Express, JWT tokens, bcrypt.js, express-validator, Mongoose, and MongoDB.  <br />
Node.Js: server side Language <br />
Express.Js:Tools make it easy to build fast, scalable APIs that can handle a wide range of requests and workloads.<br />
JWT Token:For successful authentication, a JWT token is generated and returned, which can be consumed by the app to create a user session. <br />
express-validator:Express middleware used for validate user input  <br />
bcrypt.js: For encrypt the password <br />
mongoose:Mongoose module provides several functions in order to manipulate the documents of the collection of the MongoDB database. <br />
Mongo Db: use as a Database<br /><br /><br />

# 1-Setup Project:
Create a new project directory and navigate to it in the terminal.<br />
mkdir Backend<br />
cd Backend<br /><br />
# 2- Initialize Project:
Initialize the project using npm (Node Package Manager).
 npm init<br /><br />
# 3-Install Dependencies:
Run following commend in terminal<br />
npm install express mongoose bcryptjs jsonwebtoken express-validator<br /><br /><br />

# 4-Setting Up Express Server:
Create a index.js file to set up the Express server.<br /><br />

# index.js
const express = require('express'); <br />
const app = express(); <br />
const PORT = process.env.PORT || 3000;<br /><br />

app.use(express.json()); //The express. json() function is a middleware function used in Express. js applications to <br />
                         //parse incoming JSON data from HTTP requests, a standard format for data transmission in web servers. <br />
                         //Suppose we have created an API that sends data in JSON format.<br />
app.listen(PORT, () => { <br />
  console.log(`Server is running on port ${PORT}`);<br />
});<br /><br />

# 5-Connect to MongoDB:
Create a file  named  db.js file within it to set up the MongoDB connection.<br />
For mongoDb connection you must have connection string of mongoDB<br />
If you have problem go this video [https://www.youtube.com/watch?v=oVHQXwkdS6w&ab_channel=IAmTimCorey](https://www.youtube.com/watch?v=QyYMvdFwBKA&ab_channel=ProgrammingExperience)https://www.youtube.com/watch?v=QyYMvdFwBKA&ab_channel=ProgrammingExperience <br />
Make sure password is simple means no special symbol like asdewqc123 , don't set password like @3hdf7%$&*ygjkh <br /><br />

# Db.js
const mongoose= require("mongoose");<br /><br />

const uri=mongodb://localhost:27017/nodejs-auth;<br />
const connectionParams={ <br />
   useNewUrlParser: true, <br />

   useUnifiedTopology: true<br />
} <br />

const ConnectToMongoose=async()=>{<br />
   const conn= await mongoose.connect(uri,connectionParams);<br />
   if(conn){<br />
    console.log('coonect successfully')<br />
   }<br />
}<br /><br />

module.exports=ConnectToMongoose;<br /><br />

# 6-Create User Schema and Model
Create a models folder and within models folder  create a UserSchema.js file to define the user schema using Mongoose.<br />
schemas and models is a defining the structure and behavior of your data. <br /><br />

# models/UserSchema.js<br />

const mongoose = require("mongoose")<br />
const {Schema}=mongoose;<br />
const UserSchema =  new Schema({ <br />
    name: { <br />
        type: String, <br />
        require: true, <br />

    },<br /><br />
    email: {<br />
        type: String,<br />
        require: true,<br />
        unique:true<br />
    },<br />
    password: {<br />
        type: String,<br />
        require: true,<br />
       
    },<br /> date: {<br />
        type: Date,<br />
        default:Date.now<br />

    },   <br />
})<br />
const User=mongoose.model("user",UserSchema) // create the model User Model using UserSchema<br />
module.exports=User <br /><br />

# 7: Connect express server to mongodb database
# index.js<br /><br />

# const ConnectToMongoose=require('./db');<br />
const express=require('express'); <br />
# const cors = require('cors') <br />
const app=express(); <br />
// Use cors middleware to enable CORS for all routes<br />
app.use(cors()) <br />
app.use(express.json()) <br />
# ConnectToMongoose(); <br />
app.listen(5500|| 8000) <br />




# 8-Create a router for User 

# index.js
const ConnectToMongoose=require('./db'); <br />
const express=require('express'); <br />
const cors = require('cors') <br />
require('dotenv').config() <br />

const app=express();  <br />
app.use(cors())  <br />
app.use(express.json())  <br />
ConnectToMongoose();  <br />
# app.use("/api/auth", require('./routes/auth')) <br />
app.listen(process.env.PORT|| 8000) <br />

# 9-Create Route for user <br />
Crete a Route file in root dir and with that create a auth.js <br />

# Route/auth.js<br />

const express=require('express') <br />
const router = express.Router(); <br />
const User = require("../models/userSchema"); <br />
const bcrypt = require('bcryptjs'); <br />
const  jwt = require('jsonwebtoken'); <br />
const JWT_SECRET = "ramisa@good$boy" <br /><br />

// --------------------------Route1-----------------------------<br />
//Create a user /api/auth/createuser ,No login Required<br />

router.post('/createuser',async(req,res)=>{<br />
  try { <br />
    const {name,email,password}=req.body; <br />
  if(!name|| !email || !password){ <br />
    return res.status(422).json({error:'please fill details',success:false}) <br />
  } <br />
  
  const checkUser=await User.findOne({email:email}) <br />
  if(checkUser){ <br />
    return res.status(422).json({error:'user already exist',success:false}) <br />
  }<br />
   //hash password <br />
  const salt = await bcrypt.genSalt(10); <br />
  let secpass = await bcrypt.hash(password, salt); <br />
  
  const user=new User({email,password:secpass,name}) <br />
  const Save= await user.save(); <br />
  if(Save){ <br />
  const data = { <br />
    user: { <br />
      id: user.id <br />
    } <br />
  } <br />
  const authtoken = jwt.sign(data, JWT_SECRET); <br />
  res.json({ authtoken }) <br />
  
  }<br />
  } catch (error) { <br />
    return res.status(500).json({message:error,success:false}) <br />
  } <br />
}) <br />


// --------------------------Route2----------------------------- <br />
//Login  /api/auth/login ,No login Required <br />

router.post('/login',async(req,res)=>{ <br />
try { <br />
    const {email,password}=req.body; <br />
    if( !email || !password){ <br />
      return res.status(422).json({error:'please fill details',success:false}) <br />
    } <br />
    //email check <br />
    const user=await User.findOne({email}) <br />
    if(!user){ <br />
      return res.status(422).json({error:'invalid user',success:false}) <br />
    } <br />
//password check <br />
    const passCheck= await bcrypt.compareSync(password,user.password); <br />
    if( !passCheck){ <br />
      return res.status(422).json({error:'invalid user',success:false}) <br />
    } <br />
    const data = {<br />
      user: { <br />
        id: user.id <br />
      } <br />
    } <br />
    const authtoken = jwt.sign(data, JWT_SECRET); <br />
    success=true; <br />
   return  res.json({success:true, authtoken }) <br />
  
   
    return res.status(200).json({message:"login successfully",success:true}) <br />
} catch (error) { <br />
  return res.status(500).json({message:error,success:false}) <br />
} <br />
}) <br />

module.exports = router; <br />

T
