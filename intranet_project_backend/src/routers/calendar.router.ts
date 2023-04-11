import { Router } from 'express';
import { saveIcsFileToMongoDB } from '../services/read-and-load-ics.service';

import {
    readAndLoadIcs,
    getEventsFrom
  } from '../controllers/calendar.controller';
  

const calendarRouter = Router();


// Pour charger le calendrier dans ./dtc
calendarRouter.post('/readAndLoad', readAndLoadIcs);

// getAll events en BDD
calendarRouter.get('/getAllEventsFrom/:name', getEventsFrom);




export default calendarRouter;