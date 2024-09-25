import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { InputComponent, Button } from "../Components/Component.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { setLoading } from "../store/Loader.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accessToken, setAccessToken] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect to monitor cookie changes
 // This will check for accessToken on component mount

  const OnSubmit = async (data) => {
    try {
      dispatch(setLoading(true));
      console.log("Form data:", data);
      const apiCall = await axios({
        method: "post",
        url: "http://localhost:3000/api/users/login", // Your backend API URL
        data: data,
        withCredentials: true, // Allow credentials (cookies)
      });

      console.log(apiCall);

      dispatch(setLoading(false));
      navigate("/home");
      
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center overflow-auto">
      <div className="w-full md:w-1/2 flex flex-col items-center p-5 rounded-xl backdrop-blur-xl opacity-0 animate-slideInFromBelow">
        <h1 className="font-roboto text-3xl font-semibold">Login</h1>
        <h1 className="font-roboto text-1xl font-semibold mt-2">To</h1>
        <div className="flex items-center">
          <img src={Logo} alt="image" className="h-10 w-10 md:h-20 md:w-20" />
          <h1 className="text-3xl md:text-8xl text-red-500 font-outfit font-semibold">
            MyTube
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(OnSubmit)}
          className="w-full flex flex-col justify-evenly items-center mt-6"
        >
          <InputComponent
            label="Username"
            placeholder="Enter Your Username"
            type="text"
            {...register("userName", { required: "Username is required" })}
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}

          <InputComponent
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <Button label="Login" v="1" className1="w-full mt-5" type="submit" />
        </form>
        {accessToken && <p>Logged in with token: {accessToken}</p>}
      </div>
    </div>
  );
}

export default Login;
