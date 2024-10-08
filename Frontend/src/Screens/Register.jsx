import React from "react";
import Logo from "../assets/logo.png";
import { InputComponent, Button } from "../Components/Component.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import { setLoading } from "../store/Loader.js";
import { setUser } from "../store/User.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const OnSubmit = async (data) => {
    dispatch(setLoading(true));
    try {
      const formData = new FormData();
  
      // Append non-file fields
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("userName", data.userName);
      formData.append("password", data.password);
  
      // Append file fields, if they exist
      if (data.profilePicture && data.profilePicture[0]) {
        formData.append("profilePicture", data.profilePicture[0]);
      }
      if (data.coverImage && data.coverImage[0]) {
        formData.append("coverImage", data.coverImage[0]);
      }
  
      // API call without setting headers
      const apiCall = await axios({
        method: "post",
        url: "http://localhost:3000/api/users/register",
        data: formData, // Sending FormData object in the body
      });
  
      console.log(apiCall);
      dispatch(setUser(apiCall.data.data));
      
      dispatch(setLoading(false));
      navigate("/home");
    } catch (error) {
      dispatch(setLoading(false));
      navigate("/sign-up");
      console.error("Submission error:", error);
    }
  };
  

  // Debug: Watch form values as you type
  

  return (
    <div className="w-full h-full flex items-center justify-center overflow-auto">
      <div className="w-full md:w-1/2 border flex flex-col items-center p-5 rounded-xl backdrop-blur-xl opacity-0 animate-slideInFromBelow">
        <h1 className="font-roboto text-3xl font-semibold">Register</h1>
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
          {/* Full Name */}
          <InputComponent
            label="Full Name"
            placeholder="Enter Your Name"
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}

          {/* Email */}
          <InputComponent
            label="Email"
            placeholder="Enter Your Email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          {/* Username */}
          <InputComponent
            label="Username"
            placeholder="Enter Your Username"
            type="text"
            {...register("userName", { required: "Username is required" })}
          />
          {errors.userName && (
            <span className="text-red-500">{errors.userName.message}</span>
          )}

          {/* Password */}
          <InputComponent
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          {/* Profile Picture */}
          <InputComponent
            label="Profile Picture"
            type="file"
            {...register("profilePicture")}
          />

          {/* Cover Image */}
          <InputComponent
            label="Cover Image"
            type="file"
            {...register("coverImage")}
          />

          {/* Submit Button */}
          <Button
            label="Register"
            v="2"
            className1="w-full mt-5"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
