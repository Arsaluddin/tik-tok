import React from "react";
import { useState,useEffect } from "react";
import Video from './Video';

const Home = () => {

    const [array,setArray] = useState([]);

    const tiktok = () => {
      
      fetch('http://localhost:9000/')
      .then((res) => res.json())
      .then((data) => {
        var list = [...array,data]
        
        setArray(list);
        console.log(data)
      })
  
    }
  
    useEffect(() => {
      tiktok();
    },[])

    return (
     <>
        <div className="app_videos">
        
        { array && array.map((i,index) => {
             
           return (
             
             <Video key={index} url={i.url} likes={i.likes} shares={i.shares} message={i.message} channel={i.channel} song={i.song} description={i.description}/>
             
           )
            
         })}
 
       </div>
       <a href="/posts"><button>Enter your video</button></a>
     </>
    )
}

export default Home;