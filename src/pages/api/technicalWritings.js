import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure you have your MongoDB URI in your .env.local file
const client = new MongoClient(uri);

export default async function handler(req, res) {
    try {
        await client.connect();
        const database = client.db("database1");
        const collection = database.collection("technical_writing_collection");
        const technicalWritings = await collection.find({}).toArray();
        res.status(200).json(technicalWritings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    } finally {
        await client.close();
    }
}