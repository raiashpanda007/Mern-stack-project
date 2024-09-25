import asyncHandler from "../../utilities/asyncHandler.js";
import ApiError from "../../utilities/ApiError.js";
import UserTable from "../../Models/user.model.js";
import ApiResponse from "../../utilities/ApiResponse.js";

const logout = asyncHandler(async (req, res) => {
    console.log(req.cookies); // This should now print the cookies
    res.status(200).json(ApiResponse.success("Logged out successfully"));
});


export default logout