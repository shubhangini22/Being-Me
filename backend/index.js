import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';



//importing post routes

const app=express();

app.use('./posts',postRoutes);
app.use(bodyParser.json({limit:"300mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"300mb",extended:true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://bunny22:bunny123@practice.jto9p.mongodb.net/test';
const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

//to connect with database mongodb
