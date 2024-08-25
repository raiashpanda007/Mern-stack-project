import React from "react";
import Component from "./SidebarComponent";
import {
  HomeIcon,
  ThumbUpIcon,
  HistoryIcon,
  PlaylistPlayIcon,
  SubscriptionsIcon,
} from "../assets/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  // Access sidebarShow state from the Redux store
  const Bar = useSelector((state) => state.sideBar.sidebarShow);

  // Log the value of sidebarShow for debugging
  console.log(Bar);

  const location = useLocation();
  const navigate = useNavigate();

  const SidebarData = [
    {
      Icon: HomeIcon,
      Label: "Home",
      navigateString: "/home",
    },
    {
      Icon: ThumbUpIcon,
      Label: "Liked Videos",
      navigateString: "/liked-videos",
    },
    {
      Icon: HistoryIcon,
      Label: "Watch History",
      navigateString: "/watch-history",
    },
    {
      Icon: PlaylistPlayIcon,
      Label: "Your Playlists",
      navigateString: "/your-playlist",
    },
    {
      Icon: SubscriptionsIcon,
      Label: "Subscriptions",
      navigateString: "/subscriptions",
    },
  ];

  return (
    <div>
      {Bar && ( // Conditionally render the sidebar based on sidebarShow state
        <div className="bg-gray-800 text-white h-screen rounded pt-2 ">
          {SidebarData.map((item) => {
            const SpecialCase = location.pathname === item.navigateString;

            return (
              <Component
                key={item.Label}
                Label={item.Label}
                Icon={item.Icon}
                Special={SpecialCase}
                onClick={() => navigate(item.navigateString)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
