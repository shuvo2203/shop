const express = require('express');
const { addProduct } = require('../controller/productController');
const { auth, authRoles } = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const router = express.Router();


router.route('/addProduct').post(upload.single("img"), auth, authRoles, addProduct);


module.exports = router;