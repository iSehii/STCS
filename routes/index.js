const express = require('express');
const router = express.Router();
router.use(express.json());
const { Index } = require('../controllers/indexControllers');

router.use('/', Index);
module.exports = router;