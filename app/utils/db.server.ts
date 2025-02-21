import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";

export async function connectDB() {
    if (!MONGO_URI) {
        throw new Error("MongoDB connection string is missing!");
    }

    if (mongoose.connection.readyState >= 1) {
        return; // Already connected
    }

    try {
        await mongoose.connect(MONGO_URI, {
            dbName: "DEV_ResumeBuilder",
            autoIndex: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
}
