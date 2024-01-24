import { connectDatabase } from './db';
 
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { db } = await connectDatabase();
    const contacts = await db.collection('contacts').find({}).toArray();

    res.status(200).json({ contacts });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
