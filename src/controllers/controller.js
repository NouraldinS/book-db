const express = require('express');

const router = express.Router();

const login = require('./login');
const home = require('./home');
const error = require('./error');

router.get('/', home.get);
router.get('/home', home.get);
router.get('/login', login.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
