import express, { Express } from 'express';
import dotenv from 'dotenv';
import route from './server/src/routes/api/forms';
import morgan from 'morgan';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
const BASE_URL = '/api';

//@ts-ignore
app.use(morgan('short'))
app.disable('etag');
app.use(bodyParser.json());
app.use(BASE_URL, route)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}${BASE_URL}`);
});

export default app;
