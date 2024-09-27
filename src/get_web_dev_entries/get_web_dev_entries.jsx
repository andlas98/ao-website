import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGODB_URI)
const clientPromise = client.connect()


export const handler = async () => {
  try {
    const database = (await clientPromise).db("database1");
    const allCollectionEntries = database.collection("collection1").find({});
    const result = await allCollectionEntries.toArray();
    return result;
  }
  catch(error){
    return { statusCode: 500, body: error.toString() }
  }
}

export default handler;
