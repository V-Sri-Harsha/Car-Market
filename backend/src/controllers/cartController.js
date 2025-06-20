const CartItem = require('../models/CartModel');
const Car = require('../models/CarModel');

const addToCart = async (req, res) => {
    try {
        const { carId, quantity } = req.body;

        const carExists = await Car.findById(carId);
        if (!carExists) {
            return res.status(404).json({ message: 'Car not found' });
        }

        const existingCartItem = await CartItem.findOne({ carId: carId });

        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            res.status(200).json({ message: 'Cart quantity updated successfully', cartItem: existingCartItem });
        } else {
            const newCartItem = new CartItem({
                carId,
                quantity
            });
            await newCartItem.save();
            res.status(201).json({ message: 'Item added to cart successfully', cartItem: newCartItem });
        }

    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getCartItems = async (req, res) => {
    try {
        const items = await CartItem.find({}).populate('carId');
        res.json(items);
    } catch (error)
        {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const cartItemId = req.params.id;
        const deletedItem = await CartItem.findByIdAndDelete(cartItemId);

        if (!deletedItem) {
            return res.status(404).json({ message: 'Cart item is not found' });
        }

        res.json({ message: 'Item is removed from cart successfully' });
    } catch (error) {
        console.error('Error removing from cart:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {
    addToCart,
    getCartItems,
    removeFromCart
};