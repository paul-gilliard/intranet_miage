import { Router } from 'express';

import {
    getAllMessages,
    sendMessage,
    sendPrivateMessage,
  getAllPrivateMessages,
  getPrivateMessages,
  getPrivateMessagesBetweenUsers
  } from '../controllers/messagerie.controller';

const messagerieRouter = Router();


// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllMessages', getAllMessages);


// envoie message à tout le monde
messagerieRouter.post('/sendMessage', sendMessage);

messagerieRouter.get('/privateMessages/:emeteur/:recepteur', getPrivateMessages);
messagerieRouter.get('/getPrivateMessagesBetweenUsers/emeteur/recepteur', getPrivateMessagesBetweenUsers);


// envoie message privé
messagerieRouter.post('/sendPrivateMessage', sendPrivateMessage);

// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllPrivateMessages/:email', getAllPrivateMessages);



export default messagerieRouter;