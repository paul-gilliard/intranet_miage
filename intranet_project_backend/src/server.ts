import express = require('express');
import { connectToDatabase } from "./services/database.service"
import { gamesRouter } from "./routes/games.router";

const app = express();
const port = 3000;


connectToDatabase()
    .then(() => {
        app.use("/games", gamesRouter);
        console.log(`Server started at http://localhost:${port}`);
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });


app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, (err?: Error) => {
  if (err) {
    return console.error(err);
  }
  
  return console.log(`server is listening on ${port}`);
  
});