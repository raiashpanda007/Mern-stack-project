import app from "./app.js";
import dotenv from "dotenv"
import connectDB from "./Database/index.js";
dotenv.config();
connectDB() && app.listen(3000, () => {
    console.log("⚙️ Server is running at port");
});
