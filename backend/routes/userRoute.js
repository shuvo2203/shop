const express = require('express');
const { 
    createUser, login, editUser, deleteUser, logout, 
} = require('../controller/userController');
const { auth, authRoles,  } = require('../middlewares/auth');
const router = express.Router();

router.route('/adduser').post(createUser);
router.route('/login').post(login);
router.route('/update/:id').put(auth, editUser);
router.route('/delete/:id').delete(auth,authRoles, deleteUser);
router.route('/logout').get(logout);

module.exports = router;