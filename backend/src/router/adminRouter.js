const express = require('express')
const {adminSignup , adminLogin , viewAdmin , updateAdmin , deleteAdmin} = require('../controller/admin/adminController')
const {verifyToken} = require('../middleware/auth')

const router = express.Router()

router.post('/api/admin/signup' , adminSignup)

router.post('/api/admin/login' , adminLogin)

router.get('/api/admin/view' , verifyToken , viewAdmin )

router.put('/api/admin/update' , verifyToken , updateAdmin )

router.get('/api/admin/delete' , verifyToken , deleteAdmin )

module.exports = router