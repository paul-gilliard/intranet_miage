import * as fs from 'fs';
import * as ical from 'node-ical';
import * as mongoose from 'mongoose';
import { connectToDatabase } from './database.service';

// définir le schéma de la collection MongoDB
const icsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: Object, required: true },
});

// définir le modèle de la collection MongoDB
const IcsModel = mongoose.model('Ics', icsSchema);

export async function saveIcsFileToMongoDB(filepath: string): Promise<void> {
  try {

    // lire le contenu du fichier ICS
    const icsContent = fs.readFileSync(filepath, { encoding: 'utf-8' });

    // parser le contenu du fichier ICS en un objet JavaScript
    const icsObject = ical.parseICS(icsContent);

    // créer une instance de document MongoDB
    const icsDocument = new IcsModel({
      name: filepath,
      content: icsObject,
    });

    // insérer le document dans la collection MongoDB
    await icsDocument.save();
    console.log(`Le fichier ${filepath} a été stocké avec succès dans la collection de la base de données.`);
  } catch (err) {
    console.error(`Erreur lors de l'insertion du fichier ${filepath} dans MongoDB:`, err);
    throw err;
  }
}
