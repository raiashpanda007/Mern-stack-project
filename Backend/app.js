import express from "express";
import cors from cors
import cookieParser from "cookie-parser";

const  app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}) );
app.use(express.static("public")); //This middleware serves static files from the specified directory ("public" in this case). Any files like images, CSS, JavaScript, or other assets placed in the public folder will be accessible directly via the browser.
import User_Route from "./src/routes/user.route.js";
app.use('/api/users',User_Route)



export default app;

