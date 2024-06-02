import mongoose from 'mongoose'


const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    available: { type: Boolean, required: true },
    imageUrl:{type:String , required:true}
})

const orderSchema = new mongoose.Schema({
    users: { type: String, required: true },
    item: [{
        item: String,
        quantity: { type: Number, min: 1 }
    }],

    totalPrice: { type: Number, required: true },

    orderDate: { type: Date, default: Date.now() },

    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending',
    },

    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending',
    }
})


const cartSchema = new mongoose.Schema({
    user: {
        type:String , required: true,
    },
    items: [{
        item: {
            type: String, required: true,
        },
        quantity: {
            type: Number, required: true, min: 1,
        }
    }],
    totalPrice: {
        type: Number, required: true, default: 0,
    }
})

const Menu = mongoose.model('Menu', menuSchema)
const Order = mongoose.model('Order', orderSchema)
const Cart = mongoose.model('Cart' , cartSchema)

export { Menu, Order , Cart}