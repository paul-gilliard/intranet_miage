import { Router } from 'express';

import {
    getCursusStructure
  } from '../controllers/cursus-structure.controller';
import { authenticateToken } from '../services/auth.service';

const cursusStructureRouter = Router();

cursusStructureRouter.get('/getCursusStructure', authenticateToken, getCursusStructure);

export default cursusStructureRouter;