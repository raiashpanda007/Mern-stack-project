import { z as zod } from "zod";
import asyncHandler from "../../utilities/asyncHandler.js";
import ApiError from "../../utilities/ApiError.js";
import UserTable from "../../Models/user.model.js";

const loginSchema = zod.object({
  userName: zod.string().min(1, "Please enter User Name"),
  password: zod.string().min(1, "Please enter Your Password"),
});

const loginUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  //type checking:
  const parsedData = loginSchema.safeParse({ userName, password });
  if (!parsedData.success) {
    throw new ApiError(400, "Bad request || please enter a valid input");
  }
  //find the user in db so that we can update the user information

  const user = await UserTable.findOne(userName);
  console.log('user :: userLogin',user);
  
  //validating Password
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  console.log("is Password Correct :: userLogin", isPasswordCorrect);
});

export default loginUser;
