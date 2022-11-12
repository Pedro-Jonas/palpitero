import { NextFunction, Request, Response,  } from "express";
import { SelectUsers } from "../repositories/user.Repositories.js";
import { User } from "../protocols/User.js"

async function thereIsUser(req: Request, res: Response, next: NextFunction){
    const user = req.body as User;
    try{
        const users =  await SelectUsers();
        const verifcUser = users.rows.find((element)=>
            element.name === user.name
        );
        if (verifcUser){
            return res.sendStatus(409);
        };
        res.locals.user = user;
    } catch {
        res.sendStatus(500);
    };
    next();
};

export { 
    thereIsUser
};