const express = require('express');
const {addMenu , viewMenu , updatedMenu , deletedMenu} = require('../controller/foodOrder/menu')
const {placeOrder , getUserOrders , updateOrderStatus , cancelOrder} = require('../controller/foodOrder/order')

const router = express.Router()

router.post('/api/add/menu' , addMenu)

router.get('/api/view/menu' , viewMenu)

router.put('/api/update/menu' , updatedMenu)

router.delete('/api/delete/item' , deletedMenu)


// This router work for food order

router.post('/api/order/place' , placeOrder)

module.exports = router