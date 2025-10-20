import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw Error("MongoDB URI not found in .env!")
}

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;
    try {
        await mongoose.connect(MONGODB_URI)
        isConnected = true;
        console.log("mongodb connected successfully!")
    } catch (error) {
        console.log("error while connecting to mongodb", error)
    }
}