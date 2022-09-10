const express=require("express")

const router=express.Router()

const firsts=require("../model")

router.post("/createUser",async(req,res)=>{
    try{

        const data=await firsts.create({
            ...req.body
        })
        res.status(200).json({message:"Create User Sucesss....."})

    }
    catch(err){
        res.status(400).json({message:"Create User Failure...."})
    }
})

router.get("/GetUsers",async(req,res)=>{
    try{
        const data=await firsts.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json({message:"Get Users Failure"})
    }
})

router.delete("/DeleteUser/:_id",async(req,res)=>{
    try{
        const data=await firsts.deleteOne({_id:req.params._id})
        res.status(200).json({message:"Delete User SucessFully..."})
    }
    catch(err){
        res.status(400).json({message:"Delete User Failure"})
    }
})

router.put("/UpdateUser/:_id",async(req,res)=>{
    try{
        const update=await firsts.updateOne({_id:req.params._id},{$set:req.body})
        res.status(200).json({message:"User Update Sucessfully"})
    }
    catch(err){
        res.status(400).json({message:"User Update Failure"})
    }
})


module.exports=router