import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT||3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));//for parsing application/x-www-form-urlencoded

app.use(cookieParser());

app.use('/api/auth',authRoute);

app.listen(PORT,()=>{
    connectMongoDB();
    console.log(`Server is running on ${PORT}`);
})