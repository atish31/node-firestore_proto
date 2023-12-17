import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import * as admin from 'firebase-admin';
import * as serviceAccount from './firestore.json'; // Replace with the path to your service account key JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();
console.log(db, '_____db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/postForm', (req: Request, res: Response) => {
  const requestData = req.body;
  db.collection('users1').add(requestData)
  .then((docRef) => {
    console.log(`Document written with ID: ${docRef.id}`);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });
  res.json({ message: 'Data received successfully -- ts here', data: requestData });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
