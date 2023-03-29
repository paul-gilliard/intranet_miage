"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    title: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Game', gameSchema, "users");
//# sourceMappingURL=game.model.js.map