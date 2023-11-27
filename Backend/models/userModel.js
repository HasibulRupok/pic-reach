import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },

    },
    {
        timestamps: true
    }

);

export const User = mongoose.model('User', userSchema);