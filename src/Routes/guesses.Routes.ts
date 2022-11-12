import express from "express";
import * as guessesController from "../Controllers/guesses.Controllers.js";
import { thereIsUserAndThereAsGame } from "../middlewares/guesses.Midlleware.js";

const router = express.Router();

router.post("/guesse", thereIsUserAndThereAsGame ,guessesController.postGuesse);

export default router;