import API from "../lib/api";


export const generateScriptsAPI = async (payload: {
    niche: string;
    tone: string;
    count: number;
    audience?: string;
    platforms?: string;
    goal?: string;

}) => {
const res = await API.post("/scripts/generate", payload);
return res.data;
}