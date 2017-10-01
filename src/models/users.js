import mongoose from "mongoose";

const {Schema} = mongoose;
const UserSchema = Schema({
        n_passport: String,
        n_citizent: String,
        balance: Number,
        first_name: String,
        last_name: String,
        birth_date: Date
    }, {timestamps: true}
);

const User = mongoose.model('User', UserSchema)

module.exports = User

// export default mongoose.model("User", schema);
