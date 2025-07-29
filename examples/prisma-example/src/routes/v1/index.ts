import express from "express";
import projectRouter from "../../modules/project/project.routes";

const router = express.Router();

router.use("/project", projectRouter);

export default router;
