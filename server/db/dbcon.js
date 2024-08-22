import {MongoClient, ServerApiVersion} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({path: './config.env'});
const URI = process.env.MONGO_URI || "";

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
