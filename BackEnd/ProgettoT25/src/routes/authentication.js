const express = require('express');

const multer = require('multer');
const upload = multer();

const routerAuth = express.Router();
const authController = require('../controllers/authentication');

routerAuth.post('/signIn', upload.none(), authController.login);
routerAuth.get('/logout',authController.logout);
module.exports = routerAuth;