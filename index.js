const express = require('express');
const { url } = require('inspector');
const app = express();

const PORT = 1337;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded( {extended:false} ));

app.listen(PORT, () => {
  console.log("App running on PORT : " , PORT);
})