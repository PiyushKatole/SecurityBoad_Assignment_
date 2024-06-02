import express from 'express';
import {addMenu , viewMenu , updatedMenu , deletedMenu} from '../controller/foodOrder/menu.js'
import {placeOrder , getUserOrders , updateOrderStatus , cancelOrder} from'../controller/foodOrder/order.js'
import {verifyToken} from '../middleware/auth.js' 
import {adminVerifyToken} from '../middleware/adminAuthentication.js'

const router = express.Router()

router.post('/api/add/menu' ,adminVerifyToken , addMenu)

router.get('/api/view/menu' ,verifyToken , viewMenu)

router.put('/api/update/menu' ,adminVerifyToken , updatedMenu)

router.delete('/api/delete/item' ,adminVerifyToken , deletedMenu)


// This router work for food order

router.post('/api/order/place' , verifyToken , placeOrder)

router.get('/api/get/order' ,adminVerifyToken , getUserOrders)

router.put('/api/update/order' ,adminVerifyToken , updateOrderStatus)

router.delete('/api/cancle/order' ,verifyToken , cancelOrder)

export default router