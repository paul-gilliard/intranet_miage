import { Router } from 'express';

import {
    getAllMessages,
    sendMessage,
    sendPrivateMessage,
    getAllPrivateMessages,
    getNumberOfMessages
  } from '../controllers/messagerie.controller';
import { authenticateToken } from '../services/auth.service';

const messagerieRouter = Router();


// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllMessages', authenticateToken, getAllMessages);


// envoie message à tout le monde
messagerieRouter.post('/sendMessage', authenticateToken, sendMessage);

// envoie message privé
messagerieRouter.post('/sendPrivateMessage/:email', authenticateToken, sendPrivateMessage);

// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllPrivateMessages/:email', authenticateToken, getAllPrivateMessages);

//nombre de messages stockés
messagerieRouter.get('/getNumberOfMessages', authenticateToken, getNumberOfMessages);


export default messagerieRouter;