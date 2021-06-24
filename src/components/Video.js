import React from 'react';
import ReactPlayer from 'react-player/file';

const Video = ({ path, title }) => (
    <ReactPlayer className="video-item"
        playing muted loop url={path} alt={title} width="100%" height="auto"
    />
);

export default Video;