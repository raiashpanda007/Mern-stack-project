import React, { useState } from "react";
import {
  Header,
  Sidebar,
  Component,
  Likes_Component,
  Dislike_Component,
  Subscribe_Button_Component,
  Descriptions_Component,
  Post_Comment_Component as Post_Comment,
  Comments_Component as Comments,
} from "../Components/Component.js";

import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import Logo from "../assets/logo.png";

import { useSelector } from "react-redux";
import Video from "../assets/your-story.mp4";

function VideoPlayer() {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const Bar = useSelector((state) => state.sideBar.sidebarShow);
  const metaData = {
    isLiked: false,
  };
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-grow w-full overflow-hidden">
        {/* Sidebar */}
        <div
          className={`relative top-16 ${
            Bar ? "w-1/5" : "w-0"
          } transition-all duration-300`}
        >
          {Bar && <Sidebar />}
        </div>

        {/* Main Video Content */}
        <div
          className={`relative top-16 grid grid-cols-6 ${
            Bar ? "w-4/5" : "w-full"
          } transition-all duration-300 overflow-auto pb-20`}
        >
          <div className="col-span-4 p-4">
            <div className="rounded">
              <MediaPlayer title="Sprite Fight" src={Video} controls className="rounded">
                <MediaProvider>
                  <Poster src={Logo} />
                </MediaProvider>
              </MediaPlayer>
            </div>
            <div className="">
              <div className="h-1/2 font-roberto text-4xl font-bold ">
                Heading of the video goes here
              </div>
              <div className="h-1/2  grid grid-cols-10">
                <div className="col-span-1 flex items-center ">
                  <img
                    src={Logo}
                    alt=""
                    className="h-10 w-10 rounded-full border "
                  />
                </div>
                <div className="col-span-3 ">
                  <div className="h-2/3 flex text-2xl font-semibold font-outfit items-center">
                    Channel Name
                  </div>
                  <div className="h-1/3 flex items-center font-medium text-neutral-300">
                    1.7 Million • Subscribers
                  </div>
                </div>
                <div className="col-span-6 flex justify-evenly items-center">
                  <Likes_Component
                    isLiked={isLiked}
                    onClick={() => setIsLiked((prev) => !prev)}
                  />
                  <Dislike_Component
                    isDisLiked={isDisliked}
                    onClick={() => setIsDisliked((prev) => !prev)}
                  />
                  <Subscribe_Button_Component
                    isSubscribed={isSubscribed}
                    onClick={() => setIsSubscribed((prev) => !prev)}
                  />
                </div>
                {/* Description */}
                <div className="w-full mt-2 col-span-10 ">
                  <div className=" w-1/4 flex justify-evenly text-1xl font-semibold font-outfit">
                    <div>299k Views</div> •<div>3 YEARS AGO</div>
                  </div>
                  <div className="">
                    <Descriptions_Component text={`dshsfdj`} />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {/* Post Comment */}
              <Post_Comment />
            </div>
            <div>
              <Comments/>
              <Comments/>
              <Comments/>
              <Comments/>
              <Comments/>
              <Comments/>
              <Comments/>
              <Comments/>
              <Comments/>
              <Comments/>
              
            </div>
          </div>

          <div className="col-span-2 p-4 space-y-4">
           <Component />
            <Component />
            <Component />
            <Component />
            <Component />
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
