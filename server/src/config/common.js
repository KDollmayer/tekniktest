import mongoose, { connect } from "mongoose";

const setupMongoDb = async (url) => {
  await mongoose.connect(url);
};
export default setupMongoDb;