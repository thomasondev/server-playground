import express from "express";
import * as controller from "./hello-word.controller";

const router = express.Router();

router.use("/", controller.getHelloWorld);

export default router;
