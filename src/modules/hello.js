import Hello from "../models/hello";

const hello = () =>
  Hello.findOne({ message: "Hello_World" }).then(res => res.message);

export default hello;
