import React from "react";
import { useForm } from "react-hook-form";
import { InputComponent } from "./InputComponent";
import { CloseIcon } from "../assets/Icons";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { showUpload_pop_up } from "../store/Upload_pop_up";
import { useNavigate } from "react-router-dom";
function Upload_Card_Component() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };
  const navigate = useNavigate();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}  // Handle form submit here
      className="h-5/6 w-1/2 border flex flex-col items-center justify-evenly rounded-lg relative"
    >
      <h1 className="text-6xl font-outfit font-bold">UPLOAD VIDEO</h1>

      {/* Video Title */}
      <InputComponent
        label={"Video Title"}
        placeholder={"Please enter a Video Title (50 words)..."}
        {...register("videoTitle", { required: "Video title is required" })}  // Updated field name without spaces
      />
      {errors.videoTitle && (
        <span className="text-red-500">{errors.videoTitle.message}</span>
      )}

      {/* Description */}
      <InputComponent
        label={"Description"}
        placeholder={"Please enter a Description (50 words)..."}
        {...register("description", { required: "Description is required" })}  // Updated field name
      />
      {errors.description && (
        <span className="text-red-500">{errors.description.message}</span>
      )}

      {/* Video Upload */}
      <InputComponent
        label={"Video"}
        placeholder={"Please upload a video..."}
        type={"file"}
        {...register("video", { required: "Video is required" })}  // Updated field name
      />
      {errors.video && (
        <span className="text-red-500">{errors.video.message}</span>
      )}

      {/* Thumbnail Upload */}
      <InputComponent
        label={"Thumbnail"}
        placeholder={"Please upload a thumbnail..."}
        type={"file"}
        {...register("thumbnail", { required: "Thumbnail is required" })}  // Updated field name
      />
      {errors.thumbnail && (
        <span className="text-red-500">{errors.thumbnail.message}</span>
      )}

      {/* Upload Button */}
      <div className="h-20 w-full flex justify-center">
        <Button type="submit" v="1" label={"UPLOAD VIDEO"} className1="w-1/2" />
         
      </div>
      <div className="h-20 w-full flex justify-center">
        <Button v="2" onClick={()=>navigate('/start-streaming')} label={"Live Stream *"} className1="w-1/2" />
         
        
      </div>


      {/* Close Icon */}
      <div className="absolute z-10 top-0 right-0 h-8 w-12 rounded-lg hover:bg-red-600 flex items-center justify-center cursor-pointer transition-colors duration-200 ease-in-out " onClick={()=>dispatch(showUpload_pop_up(false))}>
        <CloseIcon />
      </div>


    </form>
  );
}

export default Upload_Card_Component;
