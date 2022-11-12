import { connection } from "../db/db.js";
import { QueryResult } from "pg";
import { Games } from "../protocols/Games.js"
import { Guesse } from "../protocols/Guesse.js";


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

export { SelectGames, InsertGuesse };