import { NextFunction, Request, Response,  } from "express";
import { SelectUsers } from "../repositories/user.Repositories.js"
import { SelectGames } from "../repositories/guesses.Repositories.js";
import { Guesse } from "../protocols/Guesse.js";

async function thereIsUserAndThereAsGame(req: Request, res: Response, next: NextFunction){
    const guesse = req.body as Guesse;
    try{
        const users =  await SelectUsers();
        const games = await SelectGames();
        const verifcUserId = users.rows.find((element)=>
            element.id === guesse.userId
        );
        const verifcGameId = games.rows.find((element)=>
            element.id === guesse.gameId
        );
        if (!verifcUserId || !verifcGameId){
            return res.sendStatus(404);
        };
        if (verifcGameId.open_to_guesses === false){
            return res.sendStatus(404);
        };
        res.locals.guesse = guesse;
    } catch {
        res.sendStatus(500);
    };
    next();
};

export {
    thereIsUserAndThereAsGame
};