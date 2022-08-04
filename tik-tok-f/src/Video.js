import React ,{useRef,useState} from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = () => {
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
               src="https://statusvideoload.com/wp-content/uploads/2021/06/Army-attitude-shayari-status-Foji-shayari-status-Full-screen-short-Nksingh01.mp4 "></video>
              <VideoFooter/>
              <VideoSidebar/>
           </div>

             
           {/* VideoSidebar */}
        </>
    );
}

export default Video;