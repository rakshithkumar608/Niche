import axios from 'axios';

export const generateFromPython = async (payload) => {
    try {
        const PYTHON_API = process.env.PYTHON_API;
        console.log("🚀 Sending to Python:", payload);
        console.log("🌐 API URL:", PYTHON_API);

        const response = await axios.post(
            PYTHON_API,
            {
                niche: payload.niche,
                tone: payload.tone,
                count: payload.count   
            },
            {
                timeout: 60000,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("✅ Python Response:", response.data);

        return response.data;

    } catch (error) {
        console.error("❌ FULL ERROR:", error.response?.data || error.message);

        if (error.code === "ECONNREFUSED") {
            throw new Error("😭 Python is not running");
        }

        throw new Error("🤖 Failed to generate scripts from AI");
    }
};