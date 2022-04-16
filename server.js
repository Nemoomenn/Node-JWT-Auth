const express = require('express');
const authRoute = require('./routes/auth');
const app = express();
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts');
require('dotenv').config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI, () => console.log('Connected to Mongo!'));

//Middleware
app.use(express.json());

//Routes 
app.use('/api/user',authRoute);
app.use('/api/posts',postsRouter);


app.listen(3000, () => console.log('Server Running'));