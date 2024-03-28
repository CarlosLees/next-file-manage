import mongoose from 'mongoose';

import { MongoUser } from './mongoInterface';

const userSchema = new mongoose.Schema<MongoUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
        },
        img: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model<MongoUser>('User', userSchema);
