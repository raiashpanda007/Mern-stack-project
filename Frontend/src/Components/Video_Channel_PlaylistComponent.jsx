import React from "react";
import Video from "../assets/your-story.mp4";
import Logo from "../assets/Logo.png";
const Component = ({ type = "Channel" }) => {
  return (
    <div className=" border m-2 h-1/5 rounded-xl cursor-pointer flex">
      <div className="w-1/5  h-full flex items-center justify-center">
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
            className="h-24 w-24 border object-cover rounded-full"
          />
        )}
      </div>
      <div className="w-4/5  h-full flex flex-col ">
        <div className="h-2/3 flex items-end">
          <h1 className="text-3xl font-bold p-3 font-roboto"> Video Title </h1>
        </div>
        <div className="h-1/3">
            <p className="text-sm text-gray-500 p-3">Video Description</p>
        </div>
      </div>
    </div>
  );
};
export default Component;
