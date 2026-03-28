import { generateScripts as generateScriptsService } from "../services/script.service.js";
import Generation from "../models/generation.model.js";

export const generateScripts = async (req, res) => {
    try {
        const { niche, tone, count } = req.body;

        if (!niche || !tone) {
            return res.status(400).json({
                success: false,
                message: "❌ 'niche' and 'tone' are required fields",
            });
        }

        const { scripts, generation } = await generateScriptsService({
            niche,
            tone,
            count: count || 5,
        });

        res.json({
            success: true,
            scripts,
            generation,
        });
    } catch (error) {
        console.error("Script Controller Error:", error.message);
        res.status(500).json({
            success: false,
            message: error.message || "❌ Failed to generate scripts",
        });
    }
};

export const getHistory = async (req, res) => {
    try {
        const generations = await Generation.find()
            .sort({ createdAt: -1 })
            .populate("scripts");

        res.json({
            success: true,
            generations,
        });
    } catch (error) {
        console.error("Get History Error:", error.message);
        res.status(500).json({
            success: false,
            message: error.message || "❌ Failed to fetch history",
        });
    }
};