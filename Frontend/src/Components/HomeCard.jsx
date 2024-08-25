import React, { useRef, useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import Video from '../assets/your-story.mp4';
import { useSelector } from 'react-redux';
function HomeCard() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(true);

  const handleMouseIn = () => {
    if (videoRef.current) {
      videoRef.current.play();

    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlay(false);
      
    }
  };
  const Bar = useSelector((state) => state.sideBar.sidebarShow);
  useEffect(() => {
    console.log('Play:', play);
  },[play]);

  return (
    <div className={Bar?'border h-1/2 sm:w-1/3 flex-auto':'border h-1/2 w-1/4 flex-auto'}>
      {
        play?<video
        ref={videoRef}
        src={Video}
        className="w-full h-2/3 object-cover"
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        
        autoPlay
        muted={mute}
      />:<img src={Logo} alt="" onMouseEnter={()=>setPlay(true)} className="w-full h-2/3 object-cover"/>
      }
    </div>
  );
}

export default HomeCard;
