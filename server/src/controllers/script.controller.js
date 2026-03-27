const scriptService = require('../services/script.service');

exports.generateScripts = async (req, res, next) => {
    try {
        const { niche, tone, num_scripts } = req.body;

        if (!niche || !tone || !num_scripts ) {
            return res.status(400).json({
                success: false,
                message: "👀 Missing required fields"
            });
        }

        const scripts = await scriptService.generateScripts({
            niche,
            tone,
            num_scripts
        });

        res.status(200).json({
            success: true,
            count: scripts.length,
            date: scripts
        })
    } catch (error) {
        next(error);
    }
}