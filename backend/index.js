const ConnectToMongoose=require('./db');
const express=require('express');
const cors = require('cors')
require('dotenv').config()

const app=express();
app.use(cors())
app.use(express.json())
ConnectToMongoose();
app.use("/api/auth", require('./routes/auth'))
app.use("/api/data", require('./routes/data'))
app.listen(process.env.PORT|| 8000)