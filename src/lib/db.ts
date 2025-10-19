import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
    throw Error("MongoDB URI not found in .env!")
}

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;
    try {
        await mongoose.connect(MONGO_URI)
        isConnected = true;
        console.log("mongodb connected successfully!")
    } catch (error) {
        console.log("error while connecting to mongodb", error)
    }
}