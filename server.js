import express from 'express'
import "dotenv/config"
import cors from 'cors'
import ProductRoutes from './routes/productRoutes.js';
import { connectDB } from './lib/db.js';

import http from 'http';

const app=express();
const server= http.createServer(app);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("server is live");
});
connectDB();
app.use('/api/product/',ProductRoutes);
const port=process.env.PORT || 5000;
server.listen(port,()=>console.log("server is running on "+port))
