import { Request, Response } from "express";
import { InsertGuesse } from "../repositories/guesses.Repositories.js";
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

export {
    postGuesse
};