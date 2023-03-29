"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Global Variables
exports.collections = {};
// Initialize Connection
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default.connect("mongodb+srv://intranet-miage:intranet-miage@intranet-miage.vvjsd7d.mongodb.net/intranet-miage")
            .then(() => console.log('connected'))
            .catch(e => console.log(e));
        //   dotenv.config();
        //   const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
        //   await client.connect();
        //   const db: mongoDB.Db = client.db(process.env.DB_NAME);
        //   const listingsAndReviewsCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);
        // collections.listingsAndReviews = listingsAndReviewsCollection;
        //        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${listingsAndReviewsCollection.collectionName}`);
    });
}
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=database.service.js.map