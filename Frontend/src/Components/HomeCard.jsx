import React, { useRef, useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import Video from "../assets/your-story.mp4";
import { useSelector } from "react-redux";
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
    console.log("Play:", play);
  }, [play]);

  return (
    <div
      className={
        Bar ? " h-1/2 sm:w-1/3 flex-auto" : " h-1/2 w-1/4 flex-auto"
      }
    >
      {play ? (
        <video
          ref={videoRef}
          src={Video}
          className="w-full h-2/3 object-cover"
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseOut}
          autoPlay
          muted={mute}
        />
      ) : (
        <img
          src={Logo}
          alt="Thumb Nail"
          onMouseEnter={() => setPlay(true)}
          className="w-full h-2/3 object-cover"
        />
      )}
      <div className="h-1/3 w-full flex">
        <div className="w-1/4  flex items-center justify-center">
          <img src={Logo} className="h-20 w-20 rounded-full border" alt="" />
        </div>
        <div className="w-3/4 h-full">
          <div className="h-2/3 flex items-center">
            <h1 className="text-3xl font-bold p-2 flex font-outfit">Video Title</h1>
          </div>
          <div className="h-1/3 flex items-start">
            <p className="text-sm text-gray-300 p-2">Channel Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
