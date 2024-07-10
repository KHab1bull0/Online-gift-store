import { Router } from "express";
import { createTables } from "../controllers/tables.js";


export const setup = Router();

setup.get('/setup', createTables);