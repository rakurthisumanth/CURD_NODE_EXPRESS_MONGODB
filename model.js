const mongoose=require("mongoose")


let Users=mongoose.Schema({
    name:{
        type:"string"
    }
})

module.exports=mongoose.model("Users",Users)