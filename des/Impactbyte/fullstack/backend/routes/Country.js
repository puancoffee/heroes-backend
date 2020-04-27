const express = require('express');
const router = express.Router();
const countryController = require('../controllers/Country')

router.post('/post', countryController.create )
router.get('/get', countryController.getData )

module.exports = router;
