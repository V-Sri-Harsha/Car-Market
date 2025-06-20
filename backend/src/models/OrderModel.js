const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    items: [{
        car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    

    shippingAddress: {
        line1: { type: String, required: true }, 
        city: { type: String, required: true },
        pincode: { type: String, required: true }
    },
    paymentMethod: { type: String, required: true },
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;