import React from "react";
import { PersonIcon } from "../assets/Icons";
import Button from "./Button";
function Post_Comment_Component({type = "Comment"}) {
  return (
    <div className="mt-3 w-full flex ">
      <div className="h-10 w-10 rounded-full flex justify-center items-center border">
        <PersonIcon />
      </div>
      <div className="w-4/6">
        {
          type === "Comment" ? 
          <textarea
          rows={4}
          className="w-full bg-neutral-700 p-2 m-2 rounded font-medium font-sans"
          placeholder="Add a public comment..."
        ></textarea>:
        <input type="text" className="w-full bg-neutral-700 p-2 m-2 rounded font-medium font-sans"/>
        }
      </div>
      <div className="w-2/6 flex justify-center items-center">
        <div className="h-12  ">
          <Button v={type=="Comment"?"2":"1"} label={type=="Comment"?"Post Comment":"Reply"} className1="h-10" />
        </div>
        
        
      </div>
      
    </div>
  );
}

export default Post_Comment_Component;
