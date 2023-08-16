import  express  from "express";
import mongoose from "mongoose";
// import  data from './data.js'; 
import Videos from './dbModel.js';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();




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



mongoose.connect(process.env.connection_url,{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
});

const client = new MongoClient(process.env.connection_url);

let db, collection;

async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db('test');
    collection = db.collection('tiktokvideos');
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas', error);
  }
}

connectToDatabase();

// api endpoint


app.get("/",async(req,res)=>{
    
    try {
        const data = await collection.find().toArray();
        
        res.json(data);
        
      } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        res.status(500).json({ error: 'Failed to retrieve data' });
      }
    
})





app.post("/posts",async(req,res) => {

    const url = req.body.Url;
    const likes = req.body.likes;
    const share = req.body.shares;
    const channel = req.body.channel;
    const song = req.body.song;
    const description = req.body.description;

    const data = {url,likes,share,channel,song,description};

    try{
      
      const result = await collection.insertOne(data);
      console.log(result);
      res.redirect('/');
      res.send(result)
      
    }
    catch{
       console.log("error");
    }
  
    app.delete("/", () => {
        
    })
    
});



// listen 
app.listen(port,()=>console.log(`listening on localhost:${port}`));