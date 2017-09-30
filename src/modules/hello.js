import Hello from "../models/hello";
module.exports = function() {
  const hello = Hello.find({}).then(res => {
    return res[0];
  });
  return hello;
};
