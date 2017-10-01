import User from "../models/users";

const user = () =>
  User.findOne().then(res => res._id);

export default user;
