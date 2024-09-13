import React, { useState } from "react";
import { PersonIcon, KeyboardArrowDownIcon as Down,KeyboardArrowUpIcon as Up } from "../assets/Icons";
import Post_Comment_Component from "./Post_Comment_Component";
import Reply_Comment from "./Reply_Comment";
function Comments_Component({
  comment_text,
  comment_time,
  comment_likes,
  comment_dislikes,
  comment_user,
  replies_count,
  replies,
}) {

  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="  w-full flex mt-3 p-2">
      <div className="h-10 w-10 border rounded-full flex justify-center items-center">
        <PersonIcon />
      </div>

      <div className="w-full">
        <div className="w-1/4 h-12 pl-2 flex items-center justify-between">
          <div className="font-semibold">Anonymous</div>•
          <div className="text-neutral-300">3 Years Ago</div>
        </div>
        <div className="w-full border rounded font-medium font-outfit bg-neutral-600 p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          assumenda ipsa ratione architecto, earum exercitationem non provident.
          Quo, soluta iste, vitae delectus voluptatum sint et voluptate,
          recusandae repellat totam labore!
        </div>
        <div className="mt-1">
          <div className="text-blue-400 cursor-pointer" onClick={()=>setIsOpened((prev)=>!prev)}>
            Reply • {replies_count} {isOpened?<Up />: <Down />}
            {/* Insert a reply */}
          </div>
          {
            isOpened?<Post_Comment_Component type="reply"/> : ''
          }
          {
            isOpened?<Reply_Comment/> :""
          }
        </div>

      </div>
    </div>
  );
}

export default Comments_Component;
