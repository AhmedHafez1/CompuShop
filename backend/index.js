import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/db.js';
import productRoute from './routes/product.route.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Server is running!'));

app.use('/api/products', productRoute);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  await connectDatabase();

  app.listen(port, () =>
    console.log(`Compu Server app is listening on port ${port}!`)
  );
};

startServer();
