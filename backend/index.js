import express from "express"
const app=express()

// middlewares...........
app.use(express.json())
// ......................

app.get("/",(req,res)=>{
    res.send({"message":"hello guyscv"})
})
app.post("/add",(req,res)=>{
    console.log(req.body)
     let {a}=req.body
     res.send({"masg":a})
})
app.listen(5000,()=>{
    console.log("server is running........")
})