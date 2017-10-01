import mongoose from "mongoose";

const { Schema } = mongoose;
const schema = Schema({
  message: String,
  t_date: String,
  amount: Number,
  user_id: Number,
  payment_method: String
});

export default mongoose.model("Transaction", schema);
