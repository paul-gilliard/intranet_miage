import mongoose, { Schema, Document } from 'mongoose';

export interface DriveDocument extends Document {
  etiquetteCours: string;
  etiquettePromo: string;
  semestre: string;
  mail: string;
  document: Buffer;
}

const DocumentSchema: Schema = new Schema({
  etiquetteCours: { type: String, required: true },
  etiquettePromo: { type: String, required: true },
  semestre: { type: String, required: true },
  mail: { type: String, required: true },
  document: { type: Buffer, required: true },
});

export default mongoose.model<DriveDocument>('DriveDocument', DocumentSchema);
