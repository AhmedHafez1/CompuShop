import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDatabase from './config/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const startServer = async () => {
  await connectDatabase();

  app.listen(port, () =>
    console.log(`Compu Server app is listening on port ${port}!`)
  );
};

startServer();
