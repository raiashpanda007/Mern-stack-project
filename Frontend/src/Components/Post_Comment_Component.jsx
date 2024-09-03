import React from "react";
import { PersonIcon } from "../assets/Icons";
import Button from './Button'
function Post_Comment_Component() {
  return (
    <div className="mt-3 w-full flex " >
      <div className="h-10 w-10 rounded-full flex justify-center items-center border">
        <PersonIcon />
      </div>
      <div className="w-4/6">
        <textarea
            rows={4}
          className="w-full bg-neutral-700 p-2 m-2 rounded font-medium font-sans"
          placeholder="Add a public comment..."
        ></textarea>
      </div>
      <div className="w-2/6 flex justify-center items-center">
        <div className="h-12  ">
        <Button v ={'2'} label ={'Post Comment'} className1="h-10"/>
        </div>
      </div>
    </div>
  );
}

export default Post_Comment_Component;
