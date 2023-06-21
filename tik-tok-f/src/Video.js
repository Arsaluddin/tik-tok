import React ,{useRef,useState} from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url,likes,shares,message,song,channel,description}) => {
    const videoref = useRef(null);
    const [playing,setPlaying] = useState(false);
    

    const handleVideoPress = () => {
        if(playing){
            videoref.current.pause();
            setPlaying(false);
        }
        else{
            videoref.current.play();
            setPlaying(true);
        }
    }

    return (
        <>
           <div className="video">
               <video 
               
               onClick={handleVideoPress}
               className="video_player"
               loop
               ref={videoref}
               src={url}></video>
              <VideoFooter song={song} channel={channel} description={description}/>
              <VideoSidebar likes={likes} shares={shares} messages={message}/>
              <h1>arsal</h1>
           </div>

             
           {/* VideoSidebar */}
        </>
    );
}

export default Video;