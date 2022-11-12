import express, { json } from "express";
import cors from "cors";
import userRoutes from "./Routes/user.Routes.js";
import guessesRoutes from "./Routes/guesses.Routes.js";

const server = express();
server.use(json());
server.use(cors());

server.use(userRoutes);
server.use(guessesRoutes);

server.listen(4000, () => {
    console.log("listening on 4000");
});