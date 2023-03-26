const mongoose = require("mongoose")

const {Schema}=mongoose;
const DataSchema =  new Schema({
    asset_id: {
        type:Number,
        required:true
    },
    asset_title: {
        type:String,
        required:true
    },
    asset_description: {
        type:String,
        required:true
    },
    asset_content: {
        type:String,
       default:""
    },
    asset_type:{
        type:String,
        required:true
    },
    asset_content_type: {
        type:String,
        required:true
    }


    
    
})



const Data=mongoose.model("data",DataSchema)

module.exports=Data