const hello = require("./modules/hello");
module.exports = (function() {
  const router = require("express").Router();
  router.get("/hello", function(req, res) {
    
    hello().then(function(result) {
      res.json({ message: result.message });
    });
  });
  return router;
})();
