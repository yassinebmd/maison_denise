import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import adminRouter from './src/routes/adminRouter.js';
import eventRouter from './src/routes/eventRouter.js';
import residenceRoute from './src/routes/residenceRoute.js';
import cors from 'cors';
dotenv.config();

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));




mongoose.connect("mongodb://localhost:27017/DENISE_MASSON").then(() => console.log('mooose connect')).catch((err) => console.log('failed connect', err));

app.use('/admin', adminRouter);
app.use('/events', eventRouter);
app.use('/residences', residenceRoute);

app.listen(port, () => {
    console.log('server is running', `at http://localhost:${port}`);
});