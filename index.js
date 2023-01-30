const express = require("express");
const { url } = require("inspector");
const app = express();
const shortURL = require('./routes/url');
const homeRoutes = require('./routes/home');

const PORT = 1337;

// middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/urlapi',shortURL);
app.use('/',homeRoutes);

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT} `);
});
