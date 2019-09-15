import React from 'react';

const BackgroundVideo = ({ videoUrl }) => {
    return (
        <div>
            <video autoPlay="autoplay" loop="loop" muted className='video-background'>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
};

export default BackgroundVideo;