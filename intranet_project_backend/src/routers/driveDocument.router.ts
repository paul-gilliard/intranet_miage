import { Request } from 'express';
import { Router } from 'express';
import multer, { Multer } from 'multer';
import { insertDocument } from '../controllers/driveDocument.controller';

const driveDocumentRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

driveDocumentRouter.post('/insertDocument', upload.single('driveDocument'), insertDocument);




export default driveDocumentRouter;


