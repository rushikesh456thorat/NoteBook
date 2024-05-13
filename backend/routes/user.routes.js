import express from "express";
import protectRoute from "../utilis/protectRoutes.js";
import { fileInfo, files } from "../controller/user.controller.js";

const router = express.Router();

router.post("/files",protectRoute, files);
router.post("/file/info",protectRoute, fileInfo);

export default router;