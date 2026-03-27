const axios = require('axios');
const PYTHON_API = process.env.PYTHON_API;

exports.generateFromPython = async (payload) => {
    try {
        const response = await axios.post(PYTHON_API, payload, {
            timeout: 10000
        });

        return response.data;
    } catch (error) {
        console.error('🐍 Python Service Error:', error.message);
        
        if (error.code === 'ECONNREFUSED') {
            throw new Error('😭 Python is not running')
        }
        throw new Error('🤖 Failed to generate scripts from AI')
    }
}