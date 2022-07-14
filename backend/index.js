import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app=express();

app.use(bodyParser.json({limit:"300mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"300mb",extended:true}));
app.use(cors());

//to connect with database mongodb
