"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const games_router_1 = require("./routes/games.router");
const database_service_1 = require("./services/database.service");
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, database_service_1.connectToDatabase)();
// Routes
app.use('/api', games_router_1.gamesRouter);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
//# sourceMappingURL=app.js.map