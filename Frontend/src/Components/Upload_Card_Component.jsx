import React from "react";
import { useForm } from "react-hook-form";
import { InputComponent } from "./InputComponent";
import { CloseIcon } from "../assets/Icons";
import Button from "./Button";
function Upload_Card_Component() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="h-2/3 w-1/2 border flex flex-col items-center justify-evenly rounded-lg relative">
      <h1 className="text-6xl font-outfit font-bold">UPLOAD VIDEO</h1>
      <InputComponent
        label={"Video Title"}
        placeholder={"Please enter a Video Title(50 words)...."}
        {...register("Video Title", { required: "Video title is required" })}
      />
      {errors["Video Title"] && (
        <span className="text-red-500">{errors["Video Title"].message}</span>
      )}
      <InputComponent
        label={"Description"}
        placeholder={"Please enter a Description(50 words)...."}
        {...register("Description", { required: "Description is required" })}
      />
      {errors["Description"] && (
        <span className="text-red-500">{errors["Description"].message}</span>
      )}
      <InputComponent
        label={"Video"}
        placeholder={"Please enter a Video...."}
        type={"file"}
        {...register("Video", { required: "Video is required" })}
      />
      {errors["Video"] && (
        <span className="text-red-500">{errors["Video"].message}</span>
      )}
      <InputComponent
        label={"Thumbnail"}
        placeholder={"Please enter a Thumbnail...."}
        type={"file"}
        {...register("Thumbnail", { required: "Thumbnail is required" })}
      />
      {errors["Thumbnail"] && (
        <span className="text-red-500">{errors["Thumbnail"].message}</span>
      )}

      <div className="h-1/6 w-full flex justify-center ">
        <Button type="submit" v="1" label={"UPLOAD VIDEO"} className1="w-1/2 ">
          Upload
        </Button>
      </div>
      <div className="absolute z-10 top-0 right-0 h-8 w-12 rounded-lg hover:bg-red-600 flex items-center justify-center cursor-pointer transition-colors duration-200 ease-in-out">
        <CloseIcon />
      </div>
    </form>
  );
}

export default Upload_Card_Component;
