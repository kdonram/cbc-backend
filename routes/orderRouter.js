import express from 'express';
import { createOrder,getOrders } from '../controllers/orderController.js';

export const orderRouter = express.Router();

orderRouter.post('/',createOrder);

orderRouter.get('/',getOrders);