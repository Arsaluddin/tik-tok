import Video from "./Video.js";
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [array,setArray] = useState([{}]);

  const tiktok = () => {
    
    fetch('http://localhost:9000/')
    .then((res) => res.json())
    .then((data) => {
      setArray(data);
      console.log(data)
    })

  }

  useEffect(() => {
    tiktok();
  },[])

  return (

    

    <div className="App">  

      <div className="form">

        <form>
          <label>Url</label>
          <input></input>
          <label>likes</label>
          <input></input>
          <label>shares</label>
          <input></input>
          <label>channel</label>
          <input></input>
          <label>song</label>
          <input></input>
          <label>description</label>
          <input></input>
          <br></br>
          <button>Submit</button>
        </form>
        
      </div> 
      
      <div className="app_videos">
        {/* <Video url="https://statusvideoload.com/wp-content/uploads/2021/06/Army-attitude-shayari-status-Foji-shayari-status-Full-screen-short-Nksingh01.mp4" likes={12} shares={23} message={34} channel={"@arsal"} song={"Indian army life"} description={"the real Sigma Army💪"}/>
        
        <Video url="http://status-video.com/my_content/uploads/2021/07/Romantic-Tere-Sang-Ishq-Tarin-Hai-Sunset-15-Sec-Status-_-Instagram-Reel-Type-Video.mp4" likes={45} shares={89} message={78} channel={"@umbreen"} song={"tere sang ishq tali h"} description={"best shot on beach side💌"}/> */}

        {array && array.map((i) => {
            
           <Video key={i.id} url={i.url} likes={i.likes} shares={i.shares} message={i.message} channel={i.channel} song={i.song} description={i.description}/>
           
        })}

      </div>
         
      {/* appcontainer */}
      {/* Videos */}
      {/* videos */}
    </div>
  );
}

export default App;
