import Video from "./Video.js";
import './App.css';
import { useEffect, useState } from "react";

function App() {

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

    

    <div className="App">  

      <div className="form">
        <h2>Please Add your video </h2>
        <form >
          <label>Url</label>
          <input name="Url"></input>
          <label>likes</label>
          <input name="likes"></input>
          <label>shares</label>
          <input name="shares"></input>
          <label>channel</label>
          <input name="channel"></input>
          <label>song</label>
          <input name="song"></input>
          <label>description</label>
          <input name="description"></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        
      </div> 
      
      <div className="app_videos">
        
       { array && array.map((i,index) => {
            
          return (
            
            <Video key={index} url={i.url} likes={i.likes} shares={i.shares} message={i.message} channel={i.channel} song={i.song} description={i.description}/>
            
          )
           
        })}

      </div>
         
      {/* appcontainer */}
      {/* Videos */}
      {/* videos */}
    </div>
  );
}

export default App;
