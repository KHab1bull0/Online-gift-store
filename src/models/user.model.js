import { pool } from "../database/db.js"



export const userTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL primary key,
        username VARCHAR(32),
        fullname VARCHAR(32),
        phone_number VARCHAR(32),
        chatId INT 
    )`

    const rows = await pool.query(query)
    return rows.rows
}