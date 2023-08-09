const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
  const randomElement = getRandomElement(quotes);
  res.send({ quoterandomElement });
});

app.get("/api/quotes", (req, res, next) => {
  const filterQuotes = quotes.filter((author) => {
    return author.person === req.query.person;
  });
  if (req.query.person) {
    res.send({ quotes: filterQuotes });
  } else {
    res.send({ quotes: quotes });
  }
});

app.post("/api/quotes", (req, res, next) => {
  const newPerson = req.query.person;
  const newPuotes = req.query.quotes;
  if (newQuote != "" && newPerson != "") {
    res.send({ quote: newQuote, person: newPerson });
  } else {
    res.status(404);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
