import mongoose from "mongoose";

const GenerationSchema = new mongoose.Schema(
    {
        niche: {
            type: String,
            required: true,
        },
        tone: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            default: 5,
        },
        scripts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Script",
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Generation", GenerationSchema);
