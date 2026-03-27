const express = require("express");
const router = express.Router();
const controller = require('../controllers/script.controller');


router.post('/generate', controller.generateScripts);

module.exports = router;