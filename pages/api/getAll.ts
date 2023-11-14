// import db from '../../lib/mongodb'

// export default async (req, res) => {
//   try {
//     const collection = db.collection('requests')

//     const records = await collection.find({}).toArray()

//     res.status(200).json(records)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Error retrieving records' })
//   }
// }