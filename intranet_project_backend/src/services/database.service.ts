import * as mongoDB from "mongodb";
import mongoose from "mongoose";

export const collections: { listingsAndReviews?: mongoDB.Collection } = {}

export async function connectToDatabase () {
  mongoose.connect(
    "mongodb+srv://intranet-miage:intranet-miage@intranet-miage.vvjsd7d.mongodb.net/intranet-miage"
  )
  .then(()=>console.log('connected to database'))
  .catch(e=>console.log(e));
}