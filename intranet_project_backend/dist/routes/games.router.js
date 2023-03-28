"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesRouter = void 0;
const express_1 = __importDefault(require("express"));
const games_controller_1 = __importDefault(require("../controllers/games.controller"));
const router = express_1.default.Router();
exports.gamesRouter = router;
router.get('/', (req, res, next) => {
    res.send('List of games');
});
router.post('/', games_controller_1.default.create);
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(`Game with id ${id}`);
});
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const updatedGame = req.body;
    console.log(`Update game with id ${id}`);
    console.log(updatedGame);
    res.send(`Game with id ${id} updated`);
});
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(`Delete game with id ${id}`);
    res.send(`Game with id ${id} deleted`);
});
//# sourceMappingURL=games.router.js.map