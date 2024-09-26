import asyncHandler from "../utilities/asyncHandler.js"; 
import ApiResponse from "../utilities/ApiResponse.js";
import jwt from 'jsonwebtoken';
import ApiError from "../utilities/ApiError.js";

const verifyUser = asyncHandler(async (req, res, next) => {
    try {
        // Access the accessToken from cookies
        const accessToken = req.cookies?.accessToken;

        if (!accessToken) {
            throw new ApiError(401, 'No token provided');
        }
        
        // Verify the token
        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        if (!decodedToken) {
            throw new ApiError(401, 'User is not authorized');
        }

        // Assign the decoded token to req.user for further use
        req.user = decodedToken;
        next();
    } catch (error) {
        console.log("Can't verify the user  :: ", error);
        next(new ApiError(500, 'Internal server error'));
    }
});

export default verifyUser;
