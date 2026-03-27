const Script = require("../models/script.models");
const { generateFromPython } = require("./python.service")


exports.generateScripts = async (payload) => {
    const aiResponse = await generateFromPython(payload);

    if (!aiResponse.scripts || aiResponse.scripts.length === 0) {
        throw new Error("😭 No scripts generated");
    }

    const scriptsWithMeta = aiResponse.scripts.map((s) => ({
        ...s,
        niche: payload.niche,
        tone: payload.tone,
        performance_score: s.virality_score || 0
    }));

    const saved = await Script.insertMany(scriptsWithMeta);

    return saved;
}