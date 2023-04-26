import { NextFunction, Request, Response } from 'express';
import DriveDocument from '../models/driveDocument.model';
import * as fs from 'fs';


export const insertDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.file){
      return res.status(400).send('No file uploaded');
    }

    const newDoc = new DriveDocument({
      etiquetteCours: req.body.cours,
      etiquettePromo: req.body.promo,
      semestre: req.body.semestre,
      // mailOwner: req.body.mailOwner,
      mailOwner : req.body.mailOwner,
      driveDocument: fs.readFileSync(req.file.path),
      nom_fichier: req.body.name
    });

    const savedDoc = await newDoc.save();
    res.status(201).json(savedDoc);
  } catch (err) {
    next(err);
  }
};

export const getAllDocuments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const docs: typeof DriveDocument[] = await DriveDocument.find(); // récupère tous les DriveDocument
    res.status(200).send(docs); // renvoie les DriveDocument au client
  } catch (error) {
    res.status(500).send(error); // renvoie une erreur 500 en cas d'erreur serveur
  }
}

export const getNumberOfDocuments = async (req: Request, res: Response) => {
  try {
    const docs: typeof DriveDocument[] = await DriveDocument.find();
    if (!docs) {
      return res.status(404).json({ message: 'Documents not found' });
    }

    const numberOfDocuments = docs.length;

    res.status(200).json({ numberOfDocuments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getDocumentsByPromo = async (req: Request, res: Response, next: NextFunction) => {
  const promo = req.params.promo;
  try {
    const driveDocument = await DriveDocument.find({ etiquettePromo: promo });
    if (!driveDocument) {
      return res.status(404).json({ message: 'DriveDocument introuvable' });
    }
    res.json(driveDocument);
  } catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue' });
  }
}

export const getDocumentsBySemestre = async (req: Request, res: Response, next: NextFunction) => {
  const semestre = req.params.semestre;
  try {
    const driveDocument = await DriveDocument.find({ semestre: semestre });
    if (!driveDocument) {
      return res.status(404).json({ message: 'DriveDocument introuvable' });
    }
    res.json(driveDocument);
  } catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue' });
  }
}

export const getDocumentsByCours = async (req: Request, res: Response, next: NextFunction) => {
  const cours = req.params.cours;
  console.log(cours);
  
  
  try {
    const driveDocument = await DriveDocument.find({ etiquetteCours: cours });
    if (!driveDocument) {
      return res.status(404).json({ message: 'DriveDocument introuvable' });
    }
    res.json(driveDocument);
  } catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue' });
  }

}



