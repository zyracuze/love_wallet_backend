import hello from "./modules/hello";
import user from "./modules/user";
import {Router} from "express";

const router = Router();
const routes = (function () {

    router.get("/hello", (req, res) => {
        hello().then(message => {
            res.json({message});
        });
    });

    router.get("/users", user.list);
    router.get("/user/:id", user.get);
    router.post("/user", user.store);

    router.post("/user/increasebalance", user.balanceIncrement)

    return router;
})();

export default routes;
