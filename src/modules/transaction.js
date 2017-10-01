import Transaction from "../models/transaction";

const transaction = {
  get: () => {
    return Transaction.find({});
  }
};
export default transaction;
