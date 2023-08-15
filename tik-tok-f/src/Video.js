import React ,{useRef,useState,useEffect} from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url,likes,shares,message,song,channel,description}) => {
    const videoref = useRef(null);
    const [playing,setPlaying] = useState(false);


    useEffect(() => {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5 // Adjust the threshold as needed
        };

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
            setPlaying(true);
          } else {
            entry.target.pause();
            setPlaying(false);
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, options);
  
      if (videoref.current) {
        observer.observe(videoref.current);
      }
  
      return () => {
        if (videoref.current) {
          observer.unobserve(videoref.current);
        }
      };
    }, []);
  
    

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
              
           </div>

             
           {/* VideoSidebar */}
        </>
    );
}


export default Video;
 