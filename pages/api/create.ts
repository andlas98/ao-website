// import db from '../../lib/mongodb';
// export default async (req, res) => {
//   try {
//     const { name, to, quantity, description, externalUrl, unlockTime, targetBalance, timestamp } = req.body
//     const collection = db.collection('requests')

//     // Create a unique index on the 'to' field (ETH address)
//     await collection.createIndex({ to: 1 }, { unique: true })

//     const result = await collection.insertOne({
//       to,
//       name,
//       quantity,
//       description,
//       externalUrl,
//       unlockTime,
//       targetBalance,
//       timestamp,
//     })
//     if (result.insertedId) {
//       const insertedDocument = {
//         _id: result.insertedId, // Use the insertedId as the document's _id
//         ...req.body, // Include the rest of the document data
//       }
//       res.status(201).json({ message: 'Record created successfully', data: insertedDocument })
//     } else {
//       res.status(500).json({ message: 'Error creating record' })
//     }
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Error creating record' })
//   }
// }