const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    contact: {
        phone: String,
        email: String,
        address: String
    },
    operatingHours: {
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String
    },
    menu: [{
        name: String,
        description: String,
        category: String,
        price: Number,
        available: Boolean
    }],
    orders: [{
        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        },
        status: String,
    }],
}, { timestamps: true });

const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;
