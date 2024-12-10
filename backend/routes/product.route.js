import express from 'express';
import Product from '../models/product.model.js';
import asyncHandler from '../middleware/async.handler.js';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    }

    res.status(404).send();
  })
);

export default router;
