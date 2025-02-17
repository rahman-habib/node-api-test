const bodyParser=require("body-parser");
const cors=require("cors");
const express=require("express");
const port=process.env.PORT||9010
const app=express();

app.use(bodyParser.json(),cors())


app.get("/",(req,res)=>{
    res.send("Welcome to NodeJs API Project")
})

app.get('/hello',(req,res)=>{
    res.send("Hello World! i am here")
})

app.listen(port,()=>console.log(`server is start and running on ${port}`))