import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();


const obj1 = {
  expiresIn:process.env.ACCESS_TOKEN_EXPIRY
}
const obj2 = {
  expiresIn:process.env.REFRESH_TOKEN_EXPIRY
}

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    watchHistory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Videos",
    },
    avatar: {
      type: String,
      required: false,
    },
    coverImage: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    accessToken:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

// Whenever password is stored, it should be hashed
UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}

UserSchema.methods.generateAccessToken = async function () {
  return jwt.sign({
    _id : this._id,
    userName: this.userName,
    fullName:this.fullName,
    email:this.email,

  },String(process.env.ACCESS_TOKEN_SECRET),obj1)
  
}
UserSchema.methods.generateRefreshToken = async function () {
  return jwt.sign({
    _id: this._id,
    
  },String(process.env.REFRESH_TOKEN_SECRET),obj2)

}

const UserTable =  mongoose.model("User", UserSchema);

export default UserTable;
