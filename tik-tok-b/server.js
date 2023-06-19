import  express  from "express";
import mongoose from "mongoose";
import  data from './data.js'; 
import Videos from './dbModel.js';
import bodyParser from 'body-parser';


//app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
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






// app.get('/posts',(req,res) => {
//     res.status(200).send(data);
// })

app.post("/posts",(req,res) => {

    const url = req.body.Url;
    const likes = req.body.likes;
    const share = req.body.shares;
    const channel = req.body.channel;
    const song = req.body.song;
    const description = req.body.description;

   
   res.send("submitted");

    // res.redirect('/');
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