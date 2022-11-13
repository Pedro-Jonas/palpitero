import express from "express";
import * as guessesController from "../Controllers/guesses.Controllers.js";
import { thereIsUserAndThereAsGame, thereIsId } from "../middlewares/guesses.Midlleware.js";

const router = express.Router();

router.post("/guesse", thereIsUserAndThereAsGame, guessesController.postGuesse);
router.get("/guesse/:id", guessesController.getGuessesById);
router.get("/guesseUser/:userId", guessesController.getGuessesByUserId);
router.put("/guesse/:id", thereIsId, guessesController.updateGuessesById);
router.delete("/guesse/:id", thereIsId, guessesController.deleteGuessesById);

export default router;