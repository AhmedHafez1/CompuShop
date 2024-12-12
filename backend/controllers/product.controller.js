import asyncHandler from '../middleware/async.handler.js';
import Product from '../models/product.model.js';
import { NotFoundError } from '../error/notFound.error.js';

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  }

  throw new NotFoundError('No product available with the given id!');
});

export { getProductById, getProducts };
