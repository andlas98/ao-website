import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Ensure you have your MongoDB URI in your .env.local file
let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const database = client.db("database1");
        const collection = database.collection("technical_writing_collection");

        // Example query: Find documents where `document_title` matches a specific value
        const query = req.query.title ? { document_title: req.query.title } : {};
        const technicalWritings = await collection.find(query).toArray();

        res.status(200).json(technicalWritings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}