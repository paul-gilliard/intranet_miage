import { Router } from 'express';

import {
    getAllMessages,
    sendMessage,
    sendPrivateMessage,
    getAllPrivateMessages,
    getNumberOfMessages
  } from '../controllers/messagerie.controller';

const messagerieRouter = Router();


// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllMessages', getAllMessages);


// envoie message à tout le monde
messagerieRouter.post('/sendMessage', sendMessage);

// envoie message privé
messagerieRouter.post('/sendPrivateMessage/:email', sendPrivateMessage);

// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllPrivateMessages/:email', getAllPrivateMessages);

//nombre de messages stockés
messagerieRouter.get('/getNumberOfMessages', getNumberOfMessages);


export default messagerieRouter;