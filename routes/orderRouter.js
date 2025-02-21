import express from 'express';
import { createOrder } from '../controllers/orderController.js';

export const orderRouter = express.Router();

orderRouter.post('/',createOrder);