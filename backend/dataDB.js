const Data=require('./models/dataSchema');
const ConnectToMongoose=require('./db');
const DataJson =require('./data.json')
const start=async()=>{
try {ConnectToMongoose();
    const jsondata=await Data.create(DataJson)
    console.log("success")
} catch (error) {
    console.log(error)
}
}
start();
