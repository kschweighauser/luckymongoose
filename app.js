const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Import Routes
const postsRoute = require('./routes/posts');

//const eventsRoute = require('./routes/events');

app.use('/posts', postsRoute);

//app.use('/events', eventsRoute);

//Routes

app.get('/', (req, res) => {
    res.send('We are on HOME');
});

//Connect to database
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => {
    console.log('Mongoose connected, lucky mongoose.');
});



//Listen
app.listen(3000);
