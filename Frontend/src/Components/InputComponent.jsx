import React, { forwardRef } from "react";

export const InputComponent = forwardRef(
  ({ className, label, type = "text", placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col w-2/3 items-start">
        <label className="text-red-500 font-roboto text-xl font-semibold">
          {label}
        </label>
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          className={`w-full bg-transparent border text-2xl p-3 rounded-2xl ${className}`}
          {...props} // Pass down the rest of the props, including validation rules
        />
      </div>
    );
  }
);
