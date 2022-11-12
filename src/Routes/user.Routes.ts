import * as userController from "../Controllers/user.Controller.js";
import { thereIsUser } from "../middlewares/user.Midllewares.js";
import express from "express";

const router = express.Router();

router.post('/user', thereIsUser,  userController.postUser);
router.get('/users', userController.getUser);

export default router;