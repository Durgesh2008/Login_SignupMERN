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


// route 2
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