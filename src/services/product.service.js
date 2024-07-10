import { pool } from "../database/db.js";


export const productCreate = async (obj) => {
    try {
        `name VARCHAR(32),
        text VARCHAR(100),
        price FLOAT,
        category VARCHAR(32),
        image_url VARCHAR(100),`
        console.log(obj)
        const query = 'INSERT INTO products(name, text, price, category, image_url) values ($1, $2, $3, $4, $5) RETURNING *';
        const { name, price, category, filename, text} = obj;
        const dataRes = await pool.query(query, [name, text, price, category, filename]);

        return dataRes.rows

    } catch (e) {
        throw e
    }
}