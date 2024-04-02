const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    menu: [{
        name: String,
        description: String,
        category: String,
        price: Number,
        available: Boolean
    }],
    cuisine: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
