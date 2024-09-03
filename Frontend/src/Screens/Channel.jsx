import React,{useState} from "react";
import { Header, Sidebar, Component, ChannelOptions } from "../Components/Component.js";
import Logo from "../assets/Logo.png";
import { useSelector } from "react-redux";
import { Button } from "../Components/Component.js";
import SidebarComponent from "../Components/SidebarComponent";

function Channel() {
  const Bar = useSelector((state) => state.sideBar.sidebarShow);
  const [currentTab, setCurrentTab] = useState("Videos");
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-grow w-full overflow-hidden">
        {" "}
        {/* Added overflow-hidden */}
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
          className={`relative top-16 flex flex-col flex-grow ${
            Bar ? "w-4/5" : "w-full"
          } transition-all duration-300 overflow-auto`}
        >
          <div className="h-1/4  relative">
            {/* <img src={Logo} className="h-full w-full absolute" /> */}
            <img
              src={Logo}
              className="absolute   w-1/6 -bottom-[50%] rounded-full border"
              alt=""
            />
          </div>
          <div className="h-1/4  grid grid-cols-6">
            <div className="col-span-5  flex flex-col justify-end">
              <h1 className="text-5xl font-bold font-outfit">Channel Name</h1>
              <h1 className="text-2xl font-semibold font-roboto text-neutral-500">
                Susbcribers • 53 Millions
              </h1>
            </div>
            <div className="col-span-1 flex items-end">
              <div className="h-1//33 w-full">
                <Button label={"Subscribe"} className1=" w-full" />
              </div>
            </div>
          </div>
        <div className=" h-2/4">
          <div className="h-1/5 flex justify-evenly items-center">
            <ChannelOptions label={'Videos'} currentTab={currentTab} onClick={()=>setCurrentTab('Videos')}/>
            <ChannelOptions label={'Playlists'} currentTab={currentTab} onClick={()=>setCurrentTab('Playlists')}/>
            <ChannelOptions label={'Channels'} currentTab={currentTab} onClick={()=>setCurrentTab('Channels')}/>
            <ChannelOptions label={'About'} currentTab={currentTab} onClick={()=>setCurrentTab('About')}/>
          </div>

          <div className="h-4/5">
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
            <Component type={currentTab}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
