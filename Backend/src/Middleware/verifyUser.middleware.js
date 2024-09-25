import asyncHandler from "../utilities/asyncHandler.js";
import ApiResponse from "../utilities/ApiResponse.js";
import jwt from 'jsonwebtoken'
import ApiError from "../utilities/ApiError.js";
const verifyUser = asyncHandler(async (req,res,next) => {
    try {
        const accessToken = req.cookies?.accessToken;
        const decodedToken = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
        if(!decodedToken) {
            throw new ApiError(401,'User is not authorized ')
        }
        req.user = decodedToken;
        next();

    } catch (error) {
        console.log("Can't verify the user  :: ", error);
    }
    

})
export default verifyUser;