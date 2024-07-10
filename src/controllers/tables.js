import { orderTable } from "../models/order.model.js";
import { productTable } from "../models/product.model.js";
import { userTable } from "../models/user.model.js"


export const createTables = async (req, res) => {
    try {
        await userTable();
        await productTable();
        await orderTable();


        return res.status(200).send({
            message: 'OK table created'
        });

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message: "External server error",
            error: e
        });
    }
}