import express from 'express';
import checkObjectId from '../middleware/checkObjectId.middleware.js';
import {
  getProductById,
  getProducts,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', checkObjectId, getProductById);

export default router;
