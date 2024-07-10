import express from 'express';
import { router } from './routes/index.route.js';



export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api', router);
