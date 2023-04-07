import { Request, Response } from 'express';
import { saveIcsFileToMongoDB } from "../services/read-and-load-ics.service";
import path from 'path';

export const readAndLoadIcs = async (req: Request, res: Response) => {

const icsFilePath = path.resolve('../dtc/calendar.ics');
saveIcsFileToMongoDB("C:/Users/polol/OneDrive/Bureau/intranet_miage/intranet_project_backend/src/dtc/calendar.ics")
  .then(() => {
    res.status(200).send('Le fichier a été stocké avec succès dans MongoDB.');
  })
  .catch((err) => {
    res.status(500).send(`Erreur lors de l'insertion du fichier dans MongoDB: ${err.message}`);
  });
}