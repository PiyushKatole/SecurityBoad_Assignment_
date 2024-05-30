const express = require('express')
const {userSignup , userLogin} = require('../controller/user')

const router = express.Router()

router.post('/api/user/signup' , userSignup)

router.post('/api/user/login' , userLogin)

module.exports = router