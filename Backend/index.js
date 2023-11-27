// const express = require('express');
import express from "express";
import mongoose from "mongoose";
import { PORT, mondoDB_URL } from "./config.js";
import { User } from "./models/userModel.js";
import userRoutes from "./routes/userRoute.js";  //immport the user routes
import cors from "cors";
import multer from "multer";  // for file upload to the file system

const app = express();
app.use(express.static('Public')); // to use the static file from

// Middleware for parsing request body 
app.use(express.json());

// Middleware to handel CORS policy 
// OPTION 1: allow all the origin with default cors(*) 
app.use(cors());
// OPTION2: custom origin
// app.use(
//     cors({
//         origin: "http://localhost:5173",
//         methods: ['GET', 'POST', 'DELETE', 'PUT'],
//         allowedHeaders: ['Content-Type'],
//     })

// );

// use the user routes 
app.use('/users', userRoutes);

mongoose
    .connect(mondoDB_URL)
    .then(() => {
        console.log("Database is connected");
        //if the DB is connected then the app will listen
        app.listen(5555, () => {
            console.log(`App is listening on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    });

// cors is added / isntalled to handel the CORS pollesy