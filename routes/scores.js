const express = require('express');
const router = express.Router();
const scoreController = require('../controllers/scoreController');

router.get('/', scoreController.getScores);
router.post('/', scoreController.setScore);

module.exports = router;