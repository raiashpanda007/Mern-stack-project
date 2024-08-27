import React from "react";
import { Header, Sidebar, Component } from "../Components/Component.js";
import Logo from "../assets/Logo.png";
import { useSelector } from "react-redux";

function PlaylistScreen() {
  const Bar = useSelector((state) => state.sideBar.sidebarShow);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-grow w-full overflow-hidden"> {/* Added overflow-hidden */}
        {/* Sidebar */}
        <div className={`relative top-16 ${Bar ? "w-1/5" : "w-0"} transition-all duration-300`}>
          {Bar && <Sidebar />}
        </div>

        {/* Main Video Content */}
        <div
          className={`relative top-16 flex flex-col flex-grow ${
            Bar ? "w-4/5" : "w-full"
          } transition-all duration-300 overflow-auto`}
        >
          {/* Liked Videos Header */}
          <div className="flex items-center justify-start p-5">
            <h1 className="text-5xl font-bold font-roboto">Playlist Name</h1>
            <div className="flex items-center pl-8 text-2xl font-semibold font-outfit">
              <img src={Logo} className="h-6 mr-2 w-6 rounded-full" alt="" />
              Ashwin Rai
            </div>
            <div className="pl-8 text-neutral-300 text-xl"> • 17 videos</div>
          </div>

          {/* Videos Component List */}
          <div className="flex-grow overflow-auto p-4">
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
            <Component type="Video" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistScreen;
