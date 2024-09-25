import { z as zod } from "zod";
import asyncHandler from "../../utilities/asyncHandler.js";
import ApiError from "../../utilities/ApiError.js";
import UserTable from "../../Models/user.model.js";
import ApiResponse from "../../utilities/ApiResponse.js";
import uploadCloudinary from "../../utilities/FileUpload.js";

// Zod validation schema
const registerUserSchema = zod.object({
  fullName: zod.string().min(1, "Full name is required"),
  email: zod.string().email("Invalid email address"),
  userName: zod.string().min(1, "Username is required"),
  password: zod.string().min(8, "Password is invalid"),
});

// Function to generate tokens and send response
const loginUser = async (user, res) => {
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
    .json(new ApiResponse(200, "User registered and logged in", {
      userName: user.userName,
      email: user.email,
      avatar: user?.avatar || '',
      coverImage: user?.coverImage || '',
    }));
};

// Register user handler
const registerUser = asyncHandler(async (req, res) => {
  // Validate incoming request body using Zod schema
  const parsedData = registerUserSchema.safeParse(req.body);

  if (!parsedData.success) {
    throw new ApiError(400, "Bad Request || Invalid user inputs", parsedData.error.issues);
  }

  const { userName, fullName, password, email } = parsedData.data;

  // Check if the user already exists based on email or username
  const userExists = await UserTable.findOne({
    $or: [{ email }, { userName }],
  });

  if (userExists) {
    throw new ApiError(409, "Username or Email already exists");
  }

  const profilePicturePath = req?.files?.profilePicture?.[0]?.path;
  const coverImagePath = req?.files?.coverImage?.[0]?.path;

  const avatar = await uploadCloudinary(profilePicturePath);
  const coverImage = await uploadCloudinary(coverImagePath);

  // Create a new user
  const createNewUser = await UserTable.create({
    userName,
    fullName,
    password,
    email,
    avatar: avatar?.secure_url || "",
    coverImage: coverImage?.secure_url || " ",
  });

  // If user creation is successful, log in the user
  if (createNewUser) {
    // Call the login function to generate tokens and send response
    return loginUser(createNewUser, res);
  } else {
    throw new ApiError(500, "Internal Server Error || Could not create user");
  }
});

export { registerUser };
