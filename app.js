const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const postRoutes = require('./routes/posts');

//Middleswares
app.use('/posts', postRoutes);


// ROUTES
app.get("/", (req, res) => {
    res.send("We are on home");
});

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connect to DB');
});

app.listen(3000);
