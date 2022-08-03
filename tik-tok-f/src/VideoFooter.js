import React from "react";
import './Videofooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const VideoFooter = () => {

    return (
        <>
            <div className="videofooter">
                <div className="videofooter_text">
                       <h3>@arsal</h3>
                       <p>some discription</p>
                       <div className="videofooter_ticker">
                         <MusicNoteIcon className="videofooter_icon"/>
                       </div>
                </div>

            </div>
        </>
    );
}

export default VideoFooter;