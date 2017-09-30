import mongoose from "mongoose";

const { Schema } = mongoose;
const schema = Schema({ message: String });

export default mongoose.model("Hello", schema);
