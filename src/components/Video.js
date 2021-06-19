import React from 'react';
import ReactPlayer from 'react-player/file';

const Video = ({ path, title }) => (
    <div>
        <ReactPlayer playing loop url={path} alt={title} />
    </div>
);

export default Video;