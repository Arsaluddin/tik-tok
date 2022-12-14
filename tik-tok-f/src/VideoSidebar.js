import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { color } from "@mui/system";

const VideoSidebar = ({likes,shares,messages}) => {
  const [liked,setLiked] =useState(false);

    return (
        <>
          <div className="videosidebar">
            <div className="videosidebar_button">
              {liked ? (
                 <FavoriteIcon fontSize="large" onClick={(e)=>setLiked(false)}/>
              ):(
                <FavoriteBorderIcon fontSize="large" onClick={(e)=>setLiked(true)}/>
                )}
               <p>{liked?likes+1:likes}</p>
            </div>
            <div className="videosidebar_button">
               <ShareIcon fontSize="large"/>
               <p>{shares=shares+1}</p>
            </div>
            <div className="videosidebar_button">
                <CommentIcon fontSize="large"/>
                <p>{messages=messages+1}</p>
            </div>
          </div>
        </>
    );
}

export default VideoSidebar;