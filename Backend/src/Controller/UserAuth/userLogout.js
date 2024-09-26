import asyncHandler from "../../utilities/asyncHandler.js";
import ApiError from "../../utilities/ApiError.js";
import UserTable from "../../Models/user.model.js";
import ApiResponse from "../../utilities/ApiResponse.js";

const logout = asyncHandler(async (req, res) => {
  const channelId = req?.user._id;

  if (!channelId) {
    throw new ApiError(401, "Not verfied User");
  }
  const updateuser = await UserTable.findByIdAndUpdate(channelId, {
    refreshToken: "",
    accessToken: "",
  });
  console.log(updateuser);
  const cookieOptions = {
    httpOnly: true,
    secure: true, // Use secure cookies only in production
  };
  return res
    .status(200)
    .clearcookie('accessToken', cookieOptions)
    .clearcookie('refreshToken', cookieOptions)
    .json(
        new ApiResponse(200,"User successfully logout")
    );
});

export default logout;
