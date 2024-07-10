import { Router } from "express";
import { deleteAll, postProduct } from "../controllers/product.controller.js";
import { upload } from "../utils/multerUpload.js";




export const productRouter = Router();

productRouter.post('/product', upload.single('image'), postProduct);
productRouter.delete('/product', deleteAll);