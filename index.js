const express = require("express");
const app = express();

const PORT = 1337;

//middleware

app.listen(PORT,() => {
  console.log("App is running at PORT : ", PORT);
})