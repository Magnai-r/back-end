import express from "express";
import {
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrderById,
} from "../controllers/orderController.js";
 
export const orderRouter = express.Router();
orderRouter
  .post('/order/create', createOrder)
  .get('/orders/byId', getOrderById)
  .put('/order/update', updateOrder)
  .delete('/order/delet', deleteOrderById);