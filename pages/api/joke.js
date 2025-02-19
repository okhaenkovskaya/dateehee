import { MongoClient } from 'mongodb';

async function handler(req, res) {
  let client;

  const connectionString = process.env.MONGODB_URI;

  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    return res.status(500).json({ message: error });
  }

  const db = client.db();

  if(req.method === 'GET') {
    try {
      let result = await db.collection('jokes').aggregate([{ $sample: { size: 1 } }]).toArray();
      res.json({data: result});
    } catch (error) {
      await client.close();
      return res.status(500).json({ message: 'Error loading joke!' });
    }

    await client.close();

    res
      .status(201)
      .json({ message: 'Successfully downloaded joke!' });
  }

  if (req.method === 'POST') {
    await db.collection('jokes').updateOne(
      { id: req.body.id },
      { $set: req.body },
    ).catch ((error) => {
      client.close();

      return res.status(500).json({ message: error });
    });

    await client.close();

    res
      .status(200)
      .json({ message: 'Successfully updated counter on button!' });
  }

  if (req.method === 'DELETE') {
    await db.collection('jokes').deleteOne(
      { id: req.body }
    ).catch ((error) => {
      client.close();

      return res.status(500).json({ message: error });
    });

    await client.close();

    res
      .status(200)
      .json({ message: 'Joke deleted successfully!' });
  }
}

export default handler;
