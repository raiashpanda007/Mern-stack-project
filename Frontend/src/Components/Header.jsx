import React from "react";
import Logo from "../assets/Logo.png";
import { MenuIcon, SearchIcon, PersonIcon, UploadIcon } from "../assets/Icons";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../store/Sidebar.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { showUpload_pop_up } from "../store/Upload_pop_up.js";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Bar = useSelector((state) => state.sideBar.sidebarShow);
  const onClickHamburger = () => {
    dispatch(showSidebar(!Bar));
  };


  const { register, handleSubmit } = useForm();

  const search = (data) => {
    const query = encodeURIComponent(data.search);
    query && navigate(`/search-results/${query}`);
  };

  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <div className="bg-gray-800 h-16 w-full flex items-center justify-between absolute">
      <div className="flex items-center w-1/6 " onClick={onClickHamburger}>
        <MenuIcon className="cursor-pointer" />
        <img
          src={Logo}
          className="ml-2 h-10 w-10 cursor-pointer"
          onClick={onClickLogo}
        />
        <h1
          className=" ml-2 text-2xl md:text-4xl text-red-500 font-outfit font-semibold cursor-pointer"
          onClick={onClickLogo}
        >
          MyTube
        </h1>
      </div>

      <form onSubmit={handleSubmit(search)} className="w-4/6 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className=" border w-4/6 h-10 bg-gray-700 text-white px-2 rounded"
          {...register("search")}
        />
        <button
          className="ml-2 p-3 bg-gray-700/50 backdrop-blur-md"
          type="submit"
        >
          <SearchIcon className="cursor-pointer" />
        </button>
      </form>
      <div className="  border rounded-full p-1 flex justify-center items-center cursor-pointer" onClick={()=>dispatch(showUpload_pop_up(true))}>
        <UploadIcon className="h-10 w-10" />
      </div>
      <div className="  border rounded-full p-1 flex justify-center items-center cursor-pointer">
        <PersonIcon className="h-10 w-10" />
      </div>
    </div>
  );
}

export default Header;
