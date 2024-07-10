import { pool } from "../database/db.js";



export const orderTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS orders(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id),
        product_id INT REFERENCES products(id),
        status VARCHAR(10) CHECK (status IN ('canceled', 'pending', 'delivered')),
        ordered_at TIMESTAMP, -- bu maydon foydalanuvchi tomonidan kiritiladi
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

    const res = await pool.query(query);

    return res.rows
}