import mongoose from 'mongoose';

const { Schema } = mongoose;
const schema = Schema({
  _id: Schema.Types.ObjectId,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  total_amt: Number,
  paid_amt: Number,
  order_date: Date,
  receiver: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
export default mongoose.model("Order", schema);