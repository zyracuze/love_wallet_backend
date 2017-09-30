const Hello = require("../models/hello");
module.exports = function hello() {
  const hello = Hello.find({}).then(function(res) {
    console.log(res)
    return res[0];
  });
  return hello;
};
