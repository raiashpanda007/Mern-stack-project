import mongoose from 'mongoose'
export default async function connectDB() {
  try {

    console.log(process.env.MONGO_URI)
    const connectDB = await mongoose.connect(
        `${process.env.MONGO_URI}/mytube`
    )
    console.log(connectDB.connection.host)
  } catch (error) {
    console.log('Error in indexDB file :: ' , error);
  }  
} 