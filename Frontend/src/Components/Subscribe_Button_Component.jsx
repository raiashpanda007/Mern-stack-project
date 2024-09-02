import React from "react";

function Subscribe_Button_Component({ isSubscribed = false }) {
  return (
    <div className={isSubscribed?"w-1/3 rounded-3xl flex justify-center items-center bg-neutral-700 border h-14 cursor-pointer":"w-1/3 rounded-3xl flex justify-center items-center bg-red-500 border h-14 cursor-pointer"}>
      <span className="font-semibold text-2xl font-outfit text-white">
        {isSubscribed ? "Subscribed" : "Subscribe"}
      </span>
    </div>
  );
}

export default Subscribe_Button_Component;
