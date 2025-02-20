import mongoose from 'mongoose';

const Order = mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    orderedItem: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            },
            quantity: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    paymentId: {
        type: String
    },
    notes: {
        type: String,
    },
    status: {
        type: String,
        default: "Preparing"
    },
    name: {
        type : String,
        required: true
    }
})

export default Order;