import React from "react";
import { Header, Sidebar, Component } from "../Components/Component.js";
import Logo from "../assets/Logo.png";
import { useSelector } from "react-redux";

function Search_Results() {
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
        
        </div>
      </div>
    </div>
  );
}

export default Search_Results;
