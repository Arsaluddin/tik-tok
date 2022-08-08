import  express  from "express";
import mongoose from "mongoose";

//app config
const app = express();
const port = 9000;

// middlewares


// db config


// api endpoint

app.get("/",(req,res)=>{
    res.status(200).send("hello world");
})

// listen 
app.listen(port,()=>console.log(`listening on localhost:${port}`));