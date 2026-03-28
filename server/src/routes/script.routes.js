import express from "express";
import { generateScripts, getHistory } from "../controllers/script.controller.js";

const router = express.Router();

router.post("/generate", generateScripts);
router.get("/history", getHistory);

export default router;