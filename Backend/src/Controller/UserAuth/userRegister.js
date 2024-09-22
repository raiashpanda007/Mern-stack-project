import { z as zod } from "zod";
import asyncHandler from "../../utilities/asyncHandler.js";
import ApiError from "../../utilities/ApiError.js";
import UserTable from "../../Models/user.model.js";
import ApiResponse from "../../utilities/ApiResponse.js";
import uploadCloudinary from "../../utilities/FileUpload.js";

// Zod validation schema
const registerUserSchema = zod.object({
  fullName: zod.string().min(1, "Full name is required"), // Ensures fullname is a non-empty string
  email: zod.string().email("Invalid email address"), // Ensures email is a valid email
  userName: zod.string().min(1, "Username is required"), // Ensures username is a non-empty string
  password: zod.string().min(8, "Password is invalid"), // Ensures password is at least 8 characters long
});

// Register user handler
const registerUser = asyncHandler(async (req, res) => {
  // Validate incoming request body using Zod schema
  
  console.log("Received files: ", req.body);
  


  const parsedData = registerUserSchema.safeParse(req.body); // Parse the request body

  if (!parsedData.success) {
    // If validation fails, throw a 400 error with Zod error messages
    throw new ApiError(400, "Bad Request || Invalid user inputs", parsedData.error.issues);
  }


  const { userName, fullName, password, email } = parsedData.data;
  


  // Check if the user already exists based on email or username
  const userExists = await UserTable.findOne({
    $or: [{ email }, { userName }],
  });



  if (userExists) {
    // If user already exists, throw a conflict error
    throw new ApiError(409, "Username or Email already exists");
  }

  const profilePicturePath = req?.files?.profilePicture?.[0]?.path;
  const coverImagePath = req?.files?.coverImage?.[0]?.path;
  
  const avatar = await uploadCloudinary(profilePicturePath)
  const coverImage = await uploadCloudinary(coverImagePath);

  // Create a new user
 
    
    
    const createNewUser = await UserTable.create({
      userName,
      fullName,
      password,
      email,
      avatar:avatar?.secure_url || '',
      coverImage:coverImage?.secure_url || ' '
    });
     // If user creation is successful, return a success response with user details
  if (createNewUser) {
    console.log(createNewUser);

  res.status(200).json(new ApiResponse(200, "New User created", {
      userName,
      email,
    }));
  } else {
    // Handle case where user creation fails unexpectedly
    throw new ApiError(500, "Internal Server Error :: userRegister || Could not create user");
  }
  // Now do login after register

  


  

 
});

export { registerUser };
