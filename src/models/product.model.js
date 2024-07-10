import { pool } from "../database/db.js";



export const productTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS products(
            id SERIAL PRIMARY KEY,
            name VARCHAR(32),
            text VARCHAR(100),
            price FLOAT,
            category VARCHAR(32),
            image_url VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

    const res = await pool.query(query);

    return res.rows
}