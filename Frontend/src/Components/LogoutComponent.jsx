import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { showLogout_pop_up } from "../store/Logout_pop_up";
import { setLoading } from "../store/Loader";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Logout_Component() {

  const dispatch = useDispatch();
  const logout = async () => {
    try {
      dispatch(setLoading(true));
      dispatch(showLogout_pop_up(false));
      const response = await axios.get("http://localhost:3000/api/users/logout",{
        withCredentials:true
      });
      console.log(response);
      dispatch(setLoading(false));

    } catch (error) {
      
      dispatch(setLoading(false));

      console.error(error);
    }
  }

  const navigate = useNavigate();

  return (
    <div className="h-1/3 flex flex-col w-1/5 justify-evenly items-center">
      <h1 className="font-outfit text-2xl font-semibold">Sure You want to logout ?</h1>
        <div className="flex w-full justify-between">
            <Button
            label="Logout"
            onClick={() => {

                logout();
                navigate("/login");
                dispatch(showLogout_pop_up(false));
            }}
            />
            <Button
            v="2"
            label="Cancel"
            onClick={() => {
                dispatch(showLogout_pop_up(false));
            }}
            />
        </div>      
    </div>
  );
}

export default Logout_Component;
