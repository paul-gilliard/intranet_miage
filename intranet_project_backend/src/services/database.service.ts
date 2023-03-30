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
  .then(()=>console.log('connected to database'))
  .catch(e=>console.log(e));

}