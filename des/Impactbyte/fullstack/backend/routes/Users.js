const express = require('express');
const router = express.Router();
const userController = require('../controllers/User')

router.post('/register', userController.create )
router.post('/login', userController.authenticated )

module.exports = router;
