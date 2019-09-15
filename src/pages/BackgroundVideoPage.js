import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';

function BackgroundVideoPage() {

  const videoSource = 'https://storage.coverr.co/videos/Busy-City?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTY4NTkwMTA5fQ.mkgqOAwjSuhN5Ft8GCqnaLgQOoqi9KQ0dQ3vlVVpC9Y';
  return (
    <React.Fragment>
        <div className="video-container">
            <BackgroundVideo 
              videoUrl={videoSource}
            />
        </div>
        <h2 className="background-video-heading">Background Video Component</h2>
    </React.Fragment>
  );
}

export default BackgroundVideoPage;