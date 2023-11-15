import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
const app = express();
const port = 3000;
let data = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs", { dataList: data });
});

app.post("/submit", (req, res) => {
  const userName = req.body["username"];
  const topicName = req.body["topic"];
  const blog = req.body["textarea"];

  const newData = {
    username: userName,
    topic: topicName,
    blog: blog,
  };

  data.push(newData);

  res.render("login.ejs", { dataList: data });
  console.log(userName, topicName, blog);
});

app.listen(port, () => {
  console.log(`Listenin on port ${port}`);
});
