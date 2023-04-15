import  express  from "express";
import mongoose from "mongoose";
import  data from './data.js'; 
import Videos from './dbModel.js';


//app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Headers","*"),
    next();
});

// db config
//eA5NxCt1110R1AB0
//eA5NxCt1110R1AB0
const connection_url = 'mongodb+srv://admin:eA5NxCt1110R1AB0@cluster0.kztc4fu.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
});

// api endpoint


app.get("/",(req,res)=>{
    // res.status(200).send(data);
    data.find((err,data) => {
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})






app.get('/v1/posts',(req,res) => {
    res.status(200).send(data);
})

app.get('/v2/posts',(req,res) => {

    Videos.find((err,data) => {
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});

app.post('/v2/posts',(req,res) => {
    const dbVideos = req.body;

    Videos.create(dbVideos,(err,data) => {
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})

// listen 
app.listen(port,()=>console.log(`listening on localhost:${port}`));