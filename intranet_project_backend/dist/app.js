"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const database_service_1 = require("./services/database.service");
const games_router_1 = require("./routes/games.router");
const app = express();
const port = 3000;
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/games", games_router_1.gamesRouter);
    console.log(`Server started at http://localhost:${port}`);
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map