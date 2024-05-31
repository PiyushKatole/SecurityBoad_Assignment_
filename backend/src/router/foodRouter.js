const express = require('express');
const {addMenu , viewMenu , updatedMenu , deletedMenu} = require('../controller/foodOrder.js/menu')

const router = express.Router()

router.post('/api/add/menu' , addMenu)

router.get('/api/view/menu' , viewMenu)

router.put('/api/update/menu' , updatedMenu)

router.delete('/api/delete/item' , deletedMenu)

module.exports = router