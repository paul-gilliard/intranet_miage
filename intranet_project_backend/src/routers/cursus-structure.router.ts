import { Router } from 'express';

import {
    getCursusStructure
  } from '../controllers/cursus-structure.controller';

const cursusStructureRouter = Router();


// getAll des utilisateurs en BDD
cursusStructureRouter.get('/getCursusStructure', getCursusStructure);

export default cursusStructureRouter;