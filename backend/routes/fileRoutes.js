// fileRoutes.js
const express = require('express');
const { uploadFile, getFiles } = require('../controllers/fileController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/upload', auth, uploadFile);
router.get('/', auth, getFiles);

module.exports = router;
