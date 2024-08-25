import React from "react";

function SidebarComponent({ Label, Icon, Special = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={
        Special
          ? "cursor-pointer grid grid-cols-3 bg-black rounded-3xl m-2 transition duration-500 ease-out pt-3 pb-3"
          : "cursor-pointer grid grid-cols-3 hover:bg-black rounded-3xl m-2 transition duration-500 ease-out pt-3 pb-3"
      }
    >
      <div className="col-span-1 flex justify-end items-center mr-2 text-2xl">
        <Icon />
      </div>
      <div className="col-span-2 ml-2 text-2xl font-semibold flex items-center font-outfit ">
        {Label}
      </div>
    </div>
  );
}

export default SidebarComponent;
