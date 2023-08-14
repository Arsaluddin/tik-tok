import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
 

  const handleLike = () => {
    setLiked(!liked);
  };

 

  return (
    <div className="videosidebar">
      <div className="videosidebar_button">
        {/* Implement delete functionality */}
        {/* <DeleteIcon onClick={() => handleDelete()} fontSize="large" /> */}
      </div>
      <div className="videosidebar_button" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? Number(likes) + 1 : Number(likes)}</p>
      </div>
      <div className="videosidebar_button" >
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
        
      </div>
      <div className="videosidebar_button" >
        <CommentIcon fontSize="large" />
        <p>{messages}</p>
        
      </div>
    </div>
  );
};

export default VideoSidebar;
 