import { z as zod } from "zod";
import asyncHandler from "../../utilities/asyncHandler.js";
import ApiError from "../../utilities/ApiError.js";
import UserTable from "../../Models/user.model.js";
import ApiResponse from "../../utilities/ApiResponse.js";

const loginSchema = zod.object({
  userName: zod.string().min(1, "Please enter User Name"),
  password: zod.string().min(1, "Please enter Your Password"),
});

const loginUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  // Type checking:
  const parsedData = loginSchema.safeParse({ userName, password });
  if (!parsedData.success) {
    throw new ApiError(400, "Bad request || please enter a valid input");
  }

  // Find the user in the database
  const user = await UserTable.findOne({ userName });
  if (!user) {
    throw new ApiError(404, "No user found");
  }

  // Validate Password
  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(400, "Password is incorrect");
  }

  const refreshToken = await user.generateRefreshToken();
  const accessToken = await user.generateAccessToken();

  user.refreshToken = refreshToken;
  user.accessToken = accessToken;
  await user.save();

  // Cookie options
  const cookieOptions = {
    httpOnly: true,
    secure: true, // Use secure cookies only in production
  };
  
  // Send cookies and response
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(new ApiResponse(200, "User authenticated", {
      userName: user.userName,
      email: user.email,
      avatar: user?.avatar || '',
      coverImage: user?.coverImage || '',
    }));
});

export default loginUser;
