import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/postForm', (req: Request, res: Response) => {
  const requestData = req.body;
  res.json({ message: 'Data received successfully -- ts', data: requestData });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
