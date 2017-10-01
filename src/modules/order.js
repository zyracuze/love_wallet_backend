import Order from "../models/orders";

const order = () =>
  Order.findOne().then(res => res._id);

export default order;
