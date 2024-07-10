import { Router } from "express";
import { createTables } from "../controllers/tables.js";
import { productRouter } from "./product.route.js";


export const router = Router();

router.get('/setup', createTables);
router.use('/', productRouter);