import mongoose from "mongoose";

const connectDB = async () => {
    // Connect to MongoDB using the URI from the .env file
    mongoose.connect(`${process.env.MONGO_URI}/prescripto`)
        .then(() => console.log("MongoDB connected successfully"))
        .catch(err => console.error("MongoDB connection error:", err));

};

export default connectDB;
