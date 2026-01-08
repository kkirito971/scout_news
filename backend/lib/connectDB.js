// import mongoose from "mongoose";
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("MongoDB is connected");
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MONGO URI:", process.env.MONGO); // 🔍
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("Mongo error:", err);
    process.exit(1);
  }
};

export default connectDB;
