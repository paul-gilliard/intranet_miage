import * as fs from 'fs';
import * as ical from 'node-ical';
import IcsCalendar from '../models/ics_calendar.model';
import path from 'path';

export async function saveIcsFileToMongoDB(filepath: string): Promise<void> {
  try {
    // lire le contenu du fichier ICS
    const icsContent = fs.readFileSync(filepath, { encoding: 'utf-8' });

    // parser le contenu du fichier ICS en un objet JavaScript
    const icsObject = ical.parseICS(icsContent);
    const filename = path.basename(filepath);
    // créer une instance de document MongoDB
    const icsDocument = new IcsCalendar({
      name: filename,
      content: icsObject,
    });

    // insérer le document dans la collection MongoDB
    await icsDocument.save();
    console.log(`Le fichier ${filename} a été stocké avec succès dans la collection de la base de données.`);
  } catch (err) {
    console.error(`Erreur lors de l'insertion du fichier ${filepath} dans MongoDB:`, err);
    throw err;
  }
}