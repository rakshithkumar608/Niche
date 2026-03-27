const mongoose = require("mongoose");


const ScriptSchema = new mongoose.Schema(
    {
        hook: String,
        content: String,
        pattern_interrupt: String,
        cta: String,
        niche: String,
        tone: String,
        
        performance_score: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    },
    
);

module.exports = mongoose.model('Script', ScriptSchema)