import mongoose from "mongoose";

const {Schema} = mongoose;
const schema = Schema({
        n_passport: String,
        balance: Number,
        first_name: String,
        last_name: String,
        birth_date: Date
    }, {timestamps: true}
);

export default mongoose.model("User", schema);
