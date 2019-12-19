const express = require("express");

const app = express();
const port = 4000;

//app.use(express.static("public"));

app.listen(port, () => console.log(`Listening on port ${port}`));

// respond with "hello world" when a GET request is made to the homepage

// TODO:создать вывод по таймауту в консоль количество запросов через замыкание
app.get("/", function(req, res) {
  setTimeout(() => {
    console.log(this);
  }, 2000);

  res.send("hello world");
});
