import mongoose, { ConnectionStates } from 'mongoose';

import { MongoConnection } from './mongoInterface';

const connection: MongoConnection = {
    isConnection: ConnectionStates.disconnected,
};

export const connectToMongo = async () => {
    try {
        if (connection.isConnection !== ConnectionStates.disconnected) {
            console.log('Using existing connection');
            return;
        }

        const db = await mongoose.connect(process.env.Mongo!);
        connection.isConnection = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
    }
};
