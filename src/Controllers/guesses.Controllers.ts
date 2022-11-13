import { Request, Response } from "express";
import { InsertGuesse,SelectGuessesById, SelectGuessesByUserId } from "../repositories/guesses.Repositories.js";
import { guesseSchema } from "../schemas/guesse.Schema.js";

async function postGuesse(req: Request, res: Response){
    const guesse = res.locals.guesse;
    const { error } = guesseSchema.validate(guesse);
    if (error){
        return res.status(400).send(error.message);
    };
    try{
        InsertGuesse(guesse);
        res.sendStatus(201);
    } catch {
        res.send(500);
    };
};

async function getGuessesById(req: Request, res: Response){
    const id = req.params.id;
    if (!id){
        res.sendStatus(404);
    };
    try{
        const guesses = await SelectGuessesById(id);
        res.send(guesses.rows).status(200);
    } catch {
        res.send(500);
    }
};

async function getGuessesByUserId(req: Request, res: Response){
    const userId = req.params.userId;
    if (!userId){
        res.sendStatus(404);
    };
    try{
        const guesses = await SelectGuessesByUserId(userId);
        res.send(guesses.rows).status(200);
    } catch {
        res.send(500);
    }
};



export {
    postGuesse,
    getGuessesById,
    getGuessesByUserId
};