const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true},
    price: {type: Number,required: true},
    make: {type: String,required: true},
    model: {type: String,required: true},
    year: {type: Number,required: true},
    mileage: {type: Number,required: true},
    specifications: {type: String},
    description: {type: String},
    imageUrl: {type: String}
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

