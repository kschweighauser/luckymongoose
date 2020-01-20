const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

//Middleware

app.use('/events', () => {
    console.log('Hello World');
});

//Routes
app.get('/', (req,res) => {
    res.send('This is home.')
});

app.get('/events', (req,res) => {
    res.send('These are events.')
});

//Connect to database

mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => {
    console.log('Mongoose connected, lucky mongoose.');
});

//mongodb+srv://admin:19Satchmo01@cluster0-txsjk.mongodb.net/test?retryWrites=true&w=majority

//Listen
app.listen(3000);
