const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use("/js", express.static(__dirname, +"public/js"));
app.use("/css", express.static(__dirname, +"public/css"));
app.use("/img", express.static(__dirname, +"public/img"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const newsRouter = require("./src/routes/news");

app.use("/", newsRouter);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
