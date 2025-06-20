const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemSchema = new mongoose.Schema({
    carId: {
        type: Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },
    addedAt: {
        type: Date,
        default: Date.now,
    },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;