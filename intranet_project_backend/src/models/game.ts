import { Schema, model, Document } from 'mongoose';

export interface Game extends Document {
  title: string;
}

const gameSchema = new Schema({
  title: { type: String, required: true }
});

export default model<Game>('Game', gameSchema);