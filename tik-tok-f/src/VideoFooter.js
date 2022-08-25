import React from "react";
import './Videofooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const VideoFooter = ({song,description,channel}) => {

    return (
        <>
            <div className="videofooter">
                <div className="videofooter_text">
                       <h2>{channel}</h2>
                       <p>{description}</p>
                       <div className="videofooter_ticker">
                         <MusicNoteIcon className="videofooter_icon"/>
                          <h5>{song}</h5> 
                       </div>
                </div>

            </div>
        </>
    );
}

export default VideoFooter;