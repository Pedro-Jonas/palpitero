import { connection } from "../db/db.js";
import { QueryResult } from "pg";
import { Games } from "../protocols/Games.js"
import { Guesse } from "../protocols/Guesse.js";
import { GuesseUpdate } from "../protocols/GuesseUpdate.js";


async function SelectGames(): Promise<QueryResult<Games>>{
    return connection.query(`
    SELECT * FROM games;
    `);
};

async function InsertGuesse(guesse: Guesse){
    await connection.query(`
        INSERT INTO guesses ("userId", "gameId", guesse) VALUES ($1, $2, $3);
    `,[guesse.userId, guesse.gameId, guesse.guesse]);
};

async function SelectGuessesById(id: string): Promise<QueryResult<Guesse>>{
    return connection.query(`
    SELECT * FROM guesses WHERE id = ($1);
    `,[id]);
};

async function SelectGuessesByUserId(userId: string): Promise<QueryResult<Guesse>>{
    return connection.query(`
    SELECT * FROM guesses WHERE "userId" = ($1);
    `,[userId]);
};

async function UpdateGuessebyId(guesse: GuesseUpdate, id: string){
    await connection.query(`
        UPDATE guesses SET guesse=$1 WHERE id=$2;
    `,[guesse.guesse, id]);
};

async function DeleteGuessebyId(id: string){
    await connection.query(`
        DELETE FROM guesses WHERE id=$1;
    `,[id]);
};


export { 
    SelectGames, 
    InsertGuesse, 
    SelectGuessesById,
    SelectGuessesByUserId,
    UpdateGuessebyId,
    DeleteGuessebyId
};