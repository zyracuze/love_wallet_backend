import hello from "./modules/hello";
import transaction from "./modules/transaction";
import { Router } from "express";

const router = Router();
const routes = (function() {
  router.get("/hello", (req, res) => {
    hello().then(message => {
      res.json({ message });
    });
  });
  router.get("/transaction", (req, res) => {
    transaction.get().then(t => {
      res.json(
        t.map(tr => {
          tr.t_date = Math.floor(new Date(tr.t_date));
          return tr;
        })
      );
    });
  });
  return router;
})();

export default routes;
