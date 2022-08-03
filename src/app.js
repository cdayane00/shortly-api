import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import authRouter from './routes/authRouter.js';

const app = express();
app.use(cors());
app.use(json());
dotenv.config();

app.use(authRouter);

app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green("Server running on port " + process.env.PORT));
});