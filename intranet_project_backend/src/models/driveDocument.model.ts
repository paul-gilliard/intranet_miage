import mongoose, { Schema, Document } from 'mongoose';

export interface DriveDocument {
  etiquetteCours: string;
  etiquettePromo: string;
  semestre: string;
  mailOwner: string;
  driveDocument: Buffer;
  nom_fichier: string;
  type_fichier: string;
}

const DocumentSchema = new Schema<DriveDocument>(
  {
    etiquetteCours: { 
      type: String, 
      required: true 
    },
    etiquettePromo: { 
      type: String, 
      required: true 
    },
    semestre: { 
      type: String, 
      required: true 
    },
    mailOwner: { 
      type: String, 
      required: true 
    },
    driveDocument: { 
      type: Buffer, 
      required: true 
    },
    nom_fichier: { 
      type: String, 
      required: true 
    },
    type_fichier: { 
      type: String, 
      required: true 
    },
    },  
    {
      timestamps: true,
    });

export default mongoose.model<DriveDocument>('DriveDocument', DocumentSchema);
