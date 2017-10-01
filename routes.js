const hello = require("./modules/hello");
module.exports = (function() {
  const router = require("express").Router();
  router.get("/hello", function(req, res) {
    res.json({ message: hello() });
  });
  return router;
})();
