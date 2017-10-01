import mockingoose from "mockingoose";
import hello from "../user";

describe("Hello Module", () => {
  test("should return hello world text", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      message: "Hello_World"
    };
    mockingoose.Hello.toReturn(_doc, "findOne");
    return expect(hello()).resolves.toEqual("Hello_World");
  });
});
