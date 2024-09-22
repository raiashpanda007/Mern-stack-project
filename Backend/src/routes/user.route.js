import { Router } from "express";
import {upload} from '../Middleware/multer.middleware.js'
import {registerUser} from '../Controller/UserAuth/userRegister.js'
import loginUser from "../Controller/UserAuth/userLogin.js";
const route = Router();

route.route('/register').post(
    upload.fields([
        {
            name:"profilePicture",
            maxCount:1,
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),registerUser
)
route.route('/login').post(
    loginUser
)



export default route;