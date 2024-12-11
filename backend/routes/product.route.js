import express from 'express';
import Product from '../models/product.model.js';
import asyncHandler from '../middleware/async.handler.js';
import checkObjectId from '../middleware/checkObjectId.middleware.js';
import { NotFoundError } from '../error/notFound.error.js';
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
  asyncHandler(checkObjectId, async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    }

    throw new NotFoundError('No product available with the given id!');
  })
);

export default router;
