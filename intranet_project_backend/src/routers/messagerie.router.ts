import { Router } from 'express';

import {
    getAllMessages,
    sendMessage
  } from '../controllers/messagerie.controller';

const messagerieRouter = Router();


// getAll des utilisateurs en BDD
messagerieRouter.get('/getAllMessages', getAllMessages);


// Créer un nouvel utilisateur
messagerieRouter.post('/sendMessage', sendMessage);


export default messagerieRouter;