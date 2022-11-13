import { Request, Response } from "express";
import { DeleteGuessebyId, InsertGuesse,SelectGuessesById, SelectGuessesByUserId, UpdateGuessebyId } from "../repositories/guesses.Repositories.js";
import { guesseSchema } from "../schemas/guesse.Schema.js";
import { guesseUpdateSchema } from "../schemas/guesseUpdate.Schema.js";
import { Guesse } from "../protocols/Guesse.js";
import { GuesseUpdate } from "../protocols/GuesseUpdate.js"

async function postGuesse(req: Request, res: Response){
    const guesse = res.locals.guesse as Guesse;
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

async function updateGuessesById(req: Request, res: Response){
    const newGuesse = req.body as GuesseUpdate;
    const id = res.locals.id as string;

    const { error } = guesseUpdateSchema.validate(newGuesse);
    if (error){
        return res.status(400).send(error.message);
    };

    try{
        UpdateGuessebyId(newGuesse, id);
        res.sendStatus(201);
    } catch {
        res.send(500);
    }
};

async function deleteGuessesById(req: Request, res: Response){
    const id = res.locals.id as string;

    try{
        DeleteGuessebyId(id);
        res.sendStatus(200);
    } catch {
        res.send(500);
    }
};

export {
    postGuesse,
    getGuessesById,
    getGuessesByUserId,
    updateGuessesById,
    deleteGuessesById
};