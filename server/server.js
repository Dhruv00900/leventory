import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import sellRoutes from "./routes/sellRoutes.js";
import billRoutes from "./routes/billRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";


dotenv.config();
const app = express();

//middleware
app.use(express.json());
app.use(express.static('public'));

app.use(cookieParser());


  
app.use(
  cors({
    origin: "https://leventory.vercel.app", // This will allow requests from any origin
    credentials: true, // Keep credentials if required
  })
);









const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL)
.then(()=>{ console.log("monogodb is connencted")})
.catch((error)=>{console.log("err",error);});




// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products",productRoutes);
app.use("/api/users",userRoutes);
app.use("/api/purchase-orders", purchaseRoutes);
app.use("/api/categories", categoryRoutes)
app.use("/api/suppliers", supplierRoutes);
app.use("/api", sellRoutes);
app.use("/api/bills", billRoutes);
app.use("/api/dashboard",dashboardRoutes);




const PORT = process.env.PORT || 5003;
app.listen(PORT,()=>{
    console.log (`server is running on port ${PORT}`)});