import React from "react";
import { Header, Sidebar, Component } from "../Components/Component.js";
import Logo from "../assets/Logo.png";
import { useSelector , useDispatch } from "react-redux";
import {setType} from "../store/TypeSearchResult";

import Search_Result_options from "../Components/Search_Result_options.jsx";
function Search_Results() {
  const Bar = useSelector((state) => state.sideBar.sidebarShow);
  const type = useSelector((state) => state.searchType.type);
  const dispatch = useDispatch();

    // TODO: make that search results must have an object in which it have an property of type LIKE :"Video or Playlist" and then we can use that to render the video or playlist


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
            <div className="w-1/3 h-1/6  flex items-center justify-evenly">
            <Search_Result_options Label="Videos" onClick={()=>dispatch(setType('Videos'))} />
            <Search_Result_options Label="Playlists" onClick={()=>dispatch(setType('Playlists'))}/>
            <Search_Result_options Label="Channels" onClick={()=>dispatch(setType('Channels'))}/>
            </div>
            <div className="h-5/6">
              <Component type={type} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Search_Results;
