import hello from "./modules/hello";
import { Router } from "express";

const router = Router();
const routes = (function() {
  router.get("/hello", (req, res) => {
    hello().then(message => {
      res.json({ message });
    });
  });
  return router;
})();

export default routes;
