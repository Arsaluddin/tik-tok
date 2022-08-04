import React from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';

const VideoSidebar = () => {

    return (
        <>
          <div className="videosidebar">
            <div className="videosidebar_button">
               <FavoriteBorderIcon fontSize="large"/>
            </div>
            <div className="videosidebar_button">
               <ShareIcon fontSize="large"/>
            </div>
            <div className="videosidebar_button">
                <CommentIcon fontSize="large"/>
            </div>
          </div>
        </>
    );
}

export default VideoSidebar;