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
import { authenticateToken } from '../services/auth.service';

const messagerieRouter = Router();


// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllMessages', authenticateToken, getAllMessages);


// envoie message à tout le monde
messagerieRouter.post('/sendMessage', authenticateToken, sendMessage);

messagerieRouter.get('/privateMessages/:emeteur/:recepteur', getPrivateMessages);
messagerieRouter.get('/getPrivateMessagesBetweenUsers/emeteur/recepteur', getPrivateMessagesBetweenUsers);


// envoie message privé
//messagerieRouter.post('/sendPrivateMessage/:email', authenticateToken, sendPrivateMessage);
messagerieRouter.post('/sendPrivateMessage/', authenticateToken, sendPrivateMessage);

// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllPrivateMessages/:email', authenticateToken, getAllPrivateMessages);

//nombre de messages stockés
messagerieRouter.get('/getNumberOfMessages', authenticateToken, getNumberOfMessages);



export default messagerieRouter;