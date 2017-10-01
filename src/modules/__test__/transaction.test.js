import mockingoose from "mockingoose";
import transaction from "../transaction";

describe("Transaction Module", () => {
  test("should return default transaction list", () => {
    const list = [{}, {}, {}];
    mockingoose.Transaction.toReturn(list, "find");
    return expect(transaction.get()).resolves.toHaveLength(3);
  });
});
