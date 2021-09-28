const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

const library = {
  movies: 32,
  books: 235882,
  games: 2,
};

app.get("/healthcheck", (req, res) => res.send("Yep läuft"));

app.get("/library", (req, res) => {
  const mediaType = req.query.type;

  return res.send(
    `The media type ${mediaType} has ${library[mediaType]} units`
  );
});

app.post("/printname", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  return res.send(`name: ${name}, age: ${age}`);
});

app.listen(port, () => console.log(`app listening on port ${port}`));
