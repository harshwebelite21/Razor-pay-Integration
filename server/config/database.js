import mongoose from "mongoose";

export const connectDb = async () => {
  const { connection } = await mongoose.connect(process.env.DB_URL);
  console.log("Mongodb Connected with", connection.host);
};
