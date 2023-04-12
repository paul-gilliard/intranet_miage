import { NextFunction, Request, Response } from 'express';
import DriveDocument from '../models/driveDocument.model';

export const insertDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newDoc = new DriveDocument({
      etiquetteCours: req.body.etiquetteCours,
      etiquettePromo: req.body.etiquettePromo,
      semestre: req.body.semestre,
      mail: req.body.mail,
      document: req.file.buffer
    });

    const savedDoc = await newDoc.save();
    res.status(201).json(savedDoc);
  } catch (err) {
    next(err);
  }
};

