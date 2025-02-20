import express from 'express';
import { createProduct,getProduct } from '../controllers/productController.js';

export const productRouter = express.Router();

productRouter.post('/',createProduct);

productRouter.get('/', getProduct);