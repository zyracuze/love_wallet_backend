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

    router.get("/user", (req, res) => {
        user().then(message => {
            res.json({message});
        });
    });

    return router;
})();

export default routes;
