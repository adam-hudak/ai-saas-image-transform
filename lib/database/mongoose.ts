import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  connection: Mongoose | null;
  promis: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { connection: null, promis: null };
}

export const connectToDatabase = async () => {
  if (cached.connection) {
    return cached.connection;
  }

  if (!MONGODB_URL) {
    throw new Error("MONGO_URL is not defined");
  }

  cached.promis =
    cached.promis ||
    mongoose.connect(MONGODB_URL, {
      dbName: "ai-saas-image-transform",
      bufferCommands: false,
    });

  cached.connection = await cached.promis;

  return cached.connection;
};
