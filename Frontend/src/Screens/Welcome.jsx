import React from "react";
import Logo from "../assets/logo.png";
import { Button } from "../Components/Component.js";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="ml-5 h-full w-full flex flex-col justify-center ">
      <h1 className="text-3xl md:text-6xl font-bold">Welcome</h1>
      <h1 className="text-3xl mb-20">to</h1>
      <div className=" justify-center opacity-0  animate-slideInFromBelow ">
        <img src={Logo} alt="image" className="h-24 w-24 md:h-32 md:w-32 " />
        <h1 className=" text-5xl md:text-9xl text-red-500 font-outfit font-semibold ">
          MyTube
        </h1>
      </div>
      <div className="opacity-0 flex flex-row w-1/2 md:w-1/4 justify-between animate-slideInFromBelow delay-200 mt-10">
        <Button
          label={"Register"}
          v='2'
          onClick={() => navigate("/sign-up")}
        />
        <Button
          label={"Login"} 
          onClick={() => navigate("/login")} 
        />
      </div>
    </div>
  );
}

export default Welcome;
