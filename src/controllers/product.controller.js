import { pool } from "../database/db.js";
import { productCreate } from "../services/product.service.js";


export const postProduct = async (req, res) => {
    try {
        

        const obj = {
            name: req.body.name ?? '',
            price: req.body.price ?? '',
            category: req.body.category ?? null,
            text: req.body.text ?? '',
        }
        // console.log(obj)
        const databaseRes = await productCreate({...req.file, ...obj});

        if (req.file) {
            res.send({
                message: "Rasm yuklandi.",
                file: req.file,
                database: databaseRes
            });
        } else {
            res.status(400).send('Rasm yuklashda xatolik yuz berdi');
        }

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Server external error"
        });
    }
}



export const deleteAll = async(req, res) => {
    try {
        
        const resData = await pool.query('DELETE FROM products');

        return res.status(200).send({
            message: 'All deleted',
            res: resData
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "Server error"
        })
        
    }
}