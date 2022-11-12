import { Request, Response } from "express";
import { userSchema } from "../schemas/user.Schema.js";
import {InsertUser, SelectUsers} from "../repositories/user.Repositories.js";

async function postUser(req : Request, res: Response){
    const user = res.locals.user;
    const { error } = userSchema.validate(user);
    if (error){
        return res.status(400).send(error.message);
    };
    try{
        InsertUser(user);
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    };
};

async function getUser(req: Request, res: Response){
    try{
        const users =  await SelectUsers();
        res.status(200).send(users.rows);
    } catch {
        res.sendStatus(500);
    };
};

export { 
    postUser,
    getUser
};