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
