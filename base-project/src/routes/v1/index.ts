import express from "express";
import helloWorldRoutes from "../../modules/hello-world/hello-world.route";

const router = express.Router();

router.use("/hello-world", helloWorldRoutes);

export default router;
