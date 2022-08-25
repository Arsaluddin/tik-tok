import Video from "./Video.js";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="app_videos">
        <Video url="https://statusvideoload.com/wp-content/uploads/2021/06/Army-attitude-shayari-status-Foji-shayari-status-Full-screen-short-Nksingh01.mp4" likes={12} shares={23} message={34} channel={"@arsal"} song={"Indian army life"} description={"the real Sigma Army💪"}/>
        
        <Video url="http://status-video.com/my_content/uploads/2021/07/Romantic-Tere-Sang-Ishq-Tarin-Hai-Sunset-15-Sec-Status-_-Instagram-Reel-Type-Video.mp4" likes={45} shares={89} message={78} channel={"@umbreen"} song={"tere sang ishq tali h"} description={"best shot on beach side💌"}/>
      </div>
      
      {/* appcontainer */}
      {/* Videos */}
      {/* videos */}
    </div>
  );
}

export default App;
