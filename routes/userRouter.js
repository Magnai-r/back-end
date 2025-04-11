import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUserByID,
} from "../controllers/userController.js";
 
export const userRouter = express.Router();
 
userRouter
  .get('/users', getUsers)
  .get('/user/:id', getUserById)
  .post('/user/create', createUser)
  .delete('/user/delete', deleteUserByID)
  .put('/user/update', updateUser)