import pg from "pg";
import pkg from "pg-connection-string";

import dotenv from 'dotenv';
dotenv.config()


const { Pool } = pg

const { DBURI } = process.env
const config = pkg.parse(DBURI)
console.log(config);



export const pool = new Pool(config);