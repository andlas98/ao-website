import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

export default async function getAll(collection) {
    const client = new MongoClient(MONGODB_URI)
    try{
        await client.connect();
        const cursor = await client.db("database1").collection(collection).find({});
        const result = await cursor.toArray();
        return result;
    }
    catch(e){
        console.error("ERROR:", e);
    }
    finally{
        await client.close()
    }

}
