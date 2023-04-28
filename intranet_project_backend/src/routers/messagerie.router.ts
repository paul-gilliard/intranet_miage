import { Router } from 'express';

import {
    getAllMessages,
    sendMessage,
    sendPrivateMessage,
    getPrivateMessages,
    getPrivateMessagesBetweenUsers,
    getNumberOfMessages,
    getAllPrivateMessages
  } from '../controllers/messagerie.controller';

const messagerieRouter = Router();

// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllMessages',  getAllMessages);

// envoie message à tout le monde
messagerieRouter.post('/sendMessage',  sendMessage);

messagerieRouter.get('/privateMessages/:emeteur/:recepteur', getPrivateMessages);

messagerieRouter.get('/getPrivateMessagesBetweenUsers/emeteur/recepteur', getPrivateMessagesBetweenUsers);

messagerieRouter.post('/sendPrivateMessage/',  sendPrivateMessage);

// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllPrivateMessages/:email',  getAllPrivateMessages);

//nombre de messages stockés
messagerieRouter.get('/getNumberOfMessages',  getNumberOfMessages);

export default messagerieRouter;