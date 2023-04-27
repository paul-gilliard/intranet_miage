import { Request, Response } from 'express';
import Messagerie, { Message } from '../models/messagerie.model';
import MessageriePrive, { MessagePrive } from '../models/messagerie_prive.model';

export const getAllMessages = async (req: Request, res: Response) => {
  try {
    const messagerie = await Messagerie.findById("642d50b33d99a32d414182a2");
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
      messagerie = new Messagerie({
        nomConversation: "MIAGE",
        messages: [{ emeteur, text }]
      });
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

export const sendPrivateMessage = async (req: Request, res: Response) => {
  const { emeteur, recepteur, text } = req.body;
  try {
    let messagerie = await MessageriePrive.findOne({
      $or: [
        { emeteur: emeteur, recepteur: recepteur },
        { emeteur: recepteur, recepteur: emeteur },
      ],
    });

    if (!messagerie) {
      messagerie = new MessageriePrive({
        emeteur: emeteur,
        recepteur: recepteur,
        messages: [],
      });
    }

    const message: MessagePrive = {
      emeteur: emeteur,
      text: text,
      recepteur: recepteur
      
    };
    messagerie.messages.push(message);

    await messagerie.save();
    
    res.status(200).json(messagerie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const getAllPrivateMessages = async (req: Request, res: Response) => {
  const email = req.params.email;

  try {
    const messages = await MessageriePrive.find({
      $or: [{ emeteur: email }, { recepteur: email }]
    });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getPrivateMessages = async (req: Request, res: Response) => {
  const { emeteur, recepteur } = req.query;

  try {
    const messagerie = await MessageriePrive.findOne({
      $or: [
        { emeteur: emeteur, recepteur: recepteur },
        { emeteur: recepteur, recepteur: emeteur },
      ],
    });

    if (messagerie) {
      res.status(200).json(messagerie.messages);
    } else {
      res.status(404).json({ message: 'Conversation not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getPrivateMessagesBetweenUsers = async (req: Request, res: Response) => {
  const { user1, user2 } = req.query;

  try {
    const messages = await MessageriePrive.find({
      $or: [
        { emeteur: user1, recepteur: user2 },
        { emeteur: user2, recepteur: user1 },
      ]
    });
    res.status(200).json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getNumberOfMessages = async (req: Request, res: Response) => {
  try {
    const messagerie = await Messagerie.findById("642d50b33d99a32d414182a2");
    if (!messagerie) {
      return res.status(404).json({ message: 'Messagerie not found' });
    }
    const numberOfMessages = messagerie.messages.length;
    res.status(200).json({ numberOfMessages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};