import { connectDatabase } from './db';
 
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
      }
  
      try {
        const { db } = await connectDatabase();
        const user = await db.collection('login').findOne({ username });
  
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials - User not found' });
        }
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
