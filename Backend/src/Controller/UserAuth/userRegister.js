import {z as zod} from 'zod'
const registerUserSchema = z.object({
    fullname: zod.string().min(1, "Full name is required"), // Ensures fullname is a non-empty string
    email: zod.string().email("Invalid email address"), // Ensures email is a valid email
    username: zod.string().min(1, "Username is required"), // Ensures username is a non-empty string
    password: zod.string().min(8, "Password is invalid"),
  });

