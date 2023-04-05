import { Request, Response } from 'express';
import Messagerie, { Message } from '../models/messagerie.model';

export const getAllMessages = async (req: Request, res: Response) => {
    try {
      const messagerie = await Messagerie.findById("642c342f4d758e4658271e7a");
      if (!messagerie) {
        return res.status(404).json({ message: 'Messagerie not found' });
      }
  
      res.status(200).json(messagerie);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

export const sendMessage = async (req: Request, res: Response) => {
  const { emeteur, text } = req.body;

  try {
    let messagerie = await Messagerie.findOne();

    if (!messagerie) {
      messagerie = new Messagerie({ messages: [{ emeteur, text }] });
      await messagerie.save();
    } else {
      const message: Message = { emeteur, text };
      messagerie.messages.push(message);
      await messagerie.save();
    }

    res.status(200).json(messagerie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};