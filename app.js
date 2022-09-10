const express=require("express")
const mongoose=require("mongoose")

const app=express()


mongoose.connect("mongodb+srv://satya:8zDEWcY7NwEXKerR@cluster0.cdu8w6s.mongodb.net/?retryWrites=true&w=majority")

app.get("/GetMessage",(req,res)=>{
    res.json({name:"hello  Node Js"})
})
app.use(express.json())

app.use("/Users",require("./routes/first"))
app.listen(4000,()=>{
    console.log("Server Js Running.......")
})