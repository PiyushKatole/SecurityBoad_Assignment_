import {Menu , Cart } from '../../model/foodSchema.js'
import {users} from '../../model/userSchema.js'

const addToCart = async(req , res) =>{

    const {user , items , quantity} = req.body
    try {
        let findUser = await users.findOne({email:user})
        console.log(findUser);

        if(!findUser) {
            findUser = new Cart({user:user , items:[] , totalPrice: 0})
        }

        const menuItem = await Menu.find({name:items})
        console.log(menuItem);

        if(!menuItem || !menuItem.available){
            return res.status(400).json({error:"Item not found or not available"})
        }

        const itemIndex = findUser.item.name.findIndex(item => item.item.toString() === items)
        if(itemIndex > -1){
            findUser.item[itemIndex].quantity += quantity

        }else{
            findUser.item.push({item:items , quantity})
        }
        findUser.totalPrice += menuItem.price * quantity
        await findUser.save()

        res.status(201).json({findUser})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error in add to cart' });
    }
}

const viewCart = async (req, res) => {
    const { user} = req.params;
    try {
        const cart = await Cart.findOne({ email: user}).populate('items.item');
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


const checkout = async (req, res) => {
    const { userId } = req.body;
    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.item');
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        const order = new Order({
            user: userId,
            items: cart.items,
            totalPrice: cart.totalPrice,
        });

        await order.save();
        await Cart.deleteOne({ user: userId });

        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


export {addToCart , viewCart , checkout}