import React from 'react';
import './Home.css';
import lpe from '../Videos/lung_pulmonary_edema.mp4';
import nerve from '../Videos/nerve.mp4';
import pneumonia from '../Videos/pneumonia.mp4';
import tendon from '../Videos/tendon.mp4';

const VideoPlayer = () => {
  const [playing, setPlaying] = React.useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    
   
      <div className='video-container'>
      <div>
        <video 
        src={lpe}
        controls
        onClick={togglePlay}
        className="video-block"
        
      />
      <h3>lung_pulmonary_edema</h3>
      </div>
      <div>
      <video 
        src={nerve}
        controls
        onClick={togglePlay}
        className="video-block"
      />
      <h3>nerve</h3>
      </div>
      <div>
      <video 
        src={pneumonia}
        controls
        onClick={togglePlay}
        className="video-block"
      />
      <h3>pneumonia</h3>
      </div>
      <div>
      <video 
        src={tendon}
        controls
        onClick={togglePlay}
        className="video-block"
      />
      <h3>tendon</h3>
      </div>
      </div>
   
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <VideoPlayer />
    </div>
  );
};

export default Home;

