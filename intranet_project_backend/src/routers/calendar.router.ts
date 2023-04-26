import { Router } from 'express';
import { saveIcsFileToMongoDB } from '../services/read-and-load-ics.service';

import {
    readAndLoadIcs,
    getEventsFrom,
    countEventsForCurrentDay
  } from '../controllers/calendar.controller';
import { authenticateToken } from '../services/auth.service';
  

const calendarRouter = Router();


// Pour charger le calendrier dans ./dtc
calendarRouter.post('/readAndLoad', authenticateToken, readAndLoadIcs);

// getAll events en BDD
calendarRouter.get('/getAllEventsFrom/:name', authenticateToken, getEventsFrom);

// getAll events en BDD
calendarRouter.get('/getCountEventTodayByPromo/:promo', authenticateToken, countEventsForCurrentDay);




export default calendarRouter;