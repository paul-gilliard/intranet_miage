// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

// Global Variables

export const collections: { listingsAndReviews?: mongoDB.Collection } = {}

// Initialize Connection

export async function connectToDatabase () {


  mongoose.connect(
    "mongodb+srv://intranet-miage:intranet-miage@intranet-miage.vvjsd7d.mongodb.net/intranet-miage"
  )
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));



  //   dotenv.config();
 
  //   const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
  //   await client.connect();
        
  //   const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
  //   const listingsAndReviewsCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);
 
  // collections.listingsAndReviews = listingsAndReviewsCollection;
       
  //        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${listingsAndReviewsCollection.collectionName}`);
 }