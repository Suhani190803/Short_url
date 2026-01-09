const express = require ("express");
const {handlUserSignup,handlUserLogin} = require("../controllers/user");

const router = express.Router();

router.post('/' ,handlUserSignup );
router.post('/login' ,handlUserLogin );




module.exports = router;