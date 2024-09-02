import React from "react";
import Video from "../assets/your-story.mp4";
import Logo from "../assets/Logo.png";

const Component = ({ type = "Videos",onClick }) => {
  return (
    <div onClick={onClick} className="m-2 h-30 pb-10 rounded-xl cursor-pointer flex hover:border hover:bg-neutral-700 transition-all duration-300 ease-in-out">
      {/* Image/Video Thumbnail Container */}
      <div className="w-1/5 h-full flex items-center justify-center ">
        {type === "Channels" ? (
          <img
          src={Logo}
          alt="Thumbnail"
          className="h-24 w-24 object-cover rounded-full border"
          style={{ objectFit: "contain" }}  // Adjust for other types like audio or playlist icons
        />
        ) : (
          <img
            src={Logo}
            alt="Video Thumbnail"
            className="h-full w-full object-cover rounded-xl"
            style={{ objectFit: "contain" }}  // Ensures the image fits properly within the box
          />
        )}
      </div>

      {/* Video Title and Description */}
      <div className="w-4/5 h-full flex flex-col justify-center">
        <div className="flex items-end">
          <h1 className="text-4xl font-bold p-3 font-roboto"> Video Title </h1>
        </div>
        <div className="p-2">
          <p className="font-bold text-2xl text-gray-300">Video Description</p>
          <p className="font-semibold text-lg text-gray-400">Video released date</p>
          {
            type == "Playlists" &&(
              <p className="font-semibold text-lg text-gray-400">• 10 videos </p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Component;
