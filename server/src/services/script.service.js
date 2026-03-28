import Script from "../models/script.models.js";
import Generation from "../models/generation.model.js";
import { generateFromPython } from "./python.service.js";

export const generateScripts = async (payload) => {
    const aiResponse = await generateFromPython(payload);

    if (!aiResponse.scripts || aiResponse.scripts.length === 0) {
        throw new Error("😭 No scripts generated");
    }

    const scriptsWithMeta = aiResponse.scripts.map((s) => ({
        ...s,
        niche: payload.niche,
        tone: payload.tone,
        performance_score: s.virality_score || 0,
    }));

    const savedScripts = await Script.insertMany(scriptsWithMeta);

    // Create a generation record grouping these scripts
    const generation = await Generation.create({
        niche: payload.niche,
        tone: payload.tone,
        count: payload.count || 5,
        scripts: savedScripts.map((s) => s._id),
    });

    return { scripts: savedScripts, generation };
};