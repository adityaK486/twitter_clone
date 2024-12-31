import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT||3000;

app.use('/api/auth',authRoute);

app.listen(PORT,()=>{
    connectMongoDB();
    console.log(`Server is running on ${PORT}`);
})