// import db from '../../lib/mongodb';

// export default async (req, res) => {
//   try {
//     const { ethAddress } = req.query

//     const collection = db.collection('requests')
//     const result = await collection.deleteOne({ to: ethAddress })

//     if (result.deletedCount === 0) {
//       res.status(404).json({ message: 'Record not found' })
//     } else {
//       res.status(204).end()
//     }
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Error deleting record' })
//   }
// }