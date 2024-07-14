import { config } from "dotenv";
import { startBot } from "./bot/bot.js";
import { createTables } from "./src/controllers/tables.js";
import multer from "multer";
import path from "path";
import fs from 'fs'
import { app } from "./src/app.js";
config()


const port = process.env.PORT ?? 4000;
const TOKEN = process.env.TOKEN;


await startBot(TOKEN);


app.listen(4000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('\x1b[34mServer is working on port: \x1b[0m', `\x1b[33m${port}\x1b[0m`);

});