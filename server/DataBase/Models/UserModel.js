const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5
        },
        city: String,
        State: String,
        country: String,
        phoneNumber: String,
        transactions: Array,
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "admin"
        },
    },
    { timestamps: true }
)

const User = mongoose.model("User",UserSchema);

module.exports = User