import React from 'react';
import ReactPlayer from 'react-player/file';

const Video = ({ path, title }) => (
    <div>
        <ReactPlayer className="video-item"
            playing muted loop url={path} alt={title}
            style={{ width: "100%", height: "auto" }}
        />
    </div>
);

export default Video;