const express = require("express");

const mediaLibrary = require("./mediaLibrary");
const response = require("./responseBuilder");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = process.env.PORT || 3000;

app.get("/healthcheck", (req, res) => res.json(response(200, { message: "läuft" })));

app.get("/library", (req, res) => {
  const mediaType = req.query.type;

  return res.json(response(200, {
    message: `The media type ${mediaType} has ${mediaLibrary.getCountForMediaType(
      mediaType
    )} units`,
  }));
});

app.post("/printname", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  return res.json(response(`name: ${name}, age: ${age}`));
});

app.listen(port, () => console.log(`app listening on port ${port}`));
