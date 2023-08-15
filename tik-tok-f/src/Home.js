import React from "react";
import { useState,useEffect } from "react";
import Video from './Video';
import './Home.css'

const Home = () => {

    const [array,setArray] = useState([]);
    // const array = [];

    const tiktok = () => {
      
      fetch('https://tik-tok-b.onrender.com')
      .then((res) => res.json())
      .then((data) => {

        
        var list = [];
        for(var i=0;i<data.length;i++){
            list.push(data[i]);
        }
        console.log(list)
        setArray(list)
        
      
      })
      
    }

    
  
    useEffect(() => {
      tiktok();
    },[])

    return (
     <>
        <h1> Add your Favourite Shorts❤</h1>
        <div className="app_videos">
        
        { array && array.map((i) => {
               
           return (
             
            <Video url={i.url} likes={i.likes} shares={i.shares} message={i.message} channel={i.channel} song={i.song} description={i.description}/>
             
           )
            
         })}
 
       </div>
       <a href="/posts"><button>Enter your video</button></a>
     </>
    )
}

export default Home;