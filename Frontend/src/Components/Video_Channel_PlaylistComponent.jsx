import React from "react";
import Video from "../assets/your-story.mp4";
import Logo from "../assets/Logo.png";

const Component = ({ type = "Video" }) => {
  return (
    <div className="m-2 h-1/4 rounded-xl cursor-pointer flex hover:border hover:bg-neutral-700 transition-all duration-300 ease-in-out">
      <div className="w-1/5 h-full flex">
        {type === "Video" ? (
          <img
            src={Logo}
            alt=""
            className="h-full w-full object-cover rounded-xl"
          />
        ) : (
          <img
            src={Logo}
            alt=""
            className="h-24 w-24 object-cover rounded-full"
          />
        )}
      </div>
      <div className="w-4/5 h-full flex flex-col">
        <div className="h-1/2 flex items-end">
          <h1 className="text-4xl font-bold p-3 font-roboto"> Video Title </h1>
        </div>
        <div className="h-1/2">
          <p className="font-bold text-2xl p-2 text-gray-300">Video Description</p>
          <p className="font-semibold text-lg pl-2 text-gray-400">Video released date</p>
        </div>
      </div>
    </div>
  );
};

export default Component;
