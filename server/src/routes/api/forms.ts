import Router from 'express';
import bodyParser from 'body-parser';
import admin from 'firebase-admin';
import * as serviceAccount from './service-account.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
  
const db = admin.firestore();
console.log(db, '_____db');

const router = Router()
router.post('/post-form-data', async (req, res, next) => {
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

export default router;