import express from 'express';
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();
import { login } from '../services/adminService.js';

router.post('/login', async (req, res) => {
    try {
        const { password, email } = req.body
        const { statuscode, data } = await login({ password, email })
        res.status(statuscode).send(data)
    } catch (error) {
        res.status(500).send('there something went wrong !')

    }


});

export default router;
