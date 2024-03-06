const express = require('express');

const controllersController = require('../controllers/controller');

const router = express.Router();

// GET /feed/posts
router.get('/', controllersController.getData);
// localhost:8080/controller/
module.exports = router;