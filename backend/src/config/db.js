import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        // const conn = await mongoose.connect("mongodb+srv://akash:akash123@cluster0.2m0t0.mongodb.net/naukaa");

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ DB Error: ${error.message}`);
        process.exit(1); // app band kar dega agar DB fail hua
    }
};

export default connectDB;