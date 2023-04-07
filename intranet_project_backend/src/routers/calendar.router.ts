import { Router } from 'express';
import { saveIcsFileToMongoDB } from '../services/read-and-load-ics.service';

import {
    readAndLoadIcs
  } from '../controllers/calendar.controller';
  

const calendarRouter = Router();


// getAll des utilisateurs en BDD
calendarRouter.post('/readAndLoad', readAndLoadIcs);





export default calendarRouter;