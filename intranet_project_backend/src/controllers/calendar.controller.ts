import { Request, Response } from 'express';
import { saveIcsFileToMongoDB } from "../services/read-and-load-ics.service";
import path from 'path';
import icsCalendar from '../models/ics_calendar.model';

export const readAndLoadIcs = async (req: Request, res: Response) => {
  const { name } = req.body;
  const icsFilePath = path.resolve(__dirname, `../dtc/${name}.ics`);
  saveIcsFileToMongoDB(icsFilePath)
    .then(() => {
      res.status(200).send(`Le fichier ${name}.ics a été stocké avec succès dans MongoDB.`);
    })
    .catch((err) => {
      res.status(500).send(`Erreur lors de l'insertion du fichier ${name}.ics dans MongoDB: ${err.message}`);
    });
};

export const getEventsFrom = async (req: Request, res: Response) => {
  const name = req.params.name;

  try {
    const calendar = await icsCalendar.findOne({ name: name });
    if (!calendar) {
      return res.status(404).json({ message: 'Calendrier introuvable' });
    }
    res.json(calendar);
  } catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue' });
  }
}

export const countEventsForCurrentDay = async (req: Request, res: Response) => {
  try {
    let promo = req.params.promo;
    let nom_calendar="";
    if (promo == "M2"){
       nom_calendar = "M2_calendar_events.ics"
    }
    const calendar = await icsCalendar.findOne({ name: nom_calendar });
    if (!calendar) {
      return res.status(404).json({ error: 'Calendrier non trouvé' });
    }
    // Définir la date de début de la journée en cours (00:00:00)
    const now = new Date();
    const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
    const endOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23, 59, 59, 999));
    let count = 0;
    // Utiliser Object.values() pour obtenir un tableau d'objets représentant les valeurs de calendar.content
    const events = Object.values(calendar.content) ;
    if (events) {
      for (const event of events) {
        if (event.start) {
          const eventDate = new Date(event.start);
          if (eventDate >= startOfDay && eventDate <= endOfDay) {
            count++;
          }
        }
      }
    }

    res.json(count);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};