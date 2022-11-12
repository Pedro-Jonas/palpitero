import { QueryResult } from "pg";
import { connection } from "../db/db.js";
import { User } from "../protocols/User.js"
import { Users } from "../protocols/Users.js"

async function InsertUser(user: User){
    await connection.query(`
        INSERT INTO users (name) VALUES ($1);
    `,[user.name]);
};

async function SelectUsers(): Promise<QueryResult<Users>>{
    return connection.query(`
    SELECT * FROM users;
    `);
};

export {
    InsertUser,
    SelectUsers
};