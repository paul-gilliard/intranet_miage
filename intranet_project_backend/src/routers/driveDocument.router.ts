import { Request } from 'express';
import { Router } from 'express';
import multer, { Multer } from 'multer';
import { insertDocument, getAllDocuments, getDocumentsByPromo, getDocumentsBySemestre, getDocumentsByCours} from '../controllers/driveDocument.controller';

const driveDocumentRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

driveDocumentRouter.post('/insertDocument', upload.single('driveDocument'), insertDocument);

driveDocumentRouter.get('/getAllDocuments', getAllDocuments);

driveDocumentRouter.get('/getDocumentsByPromo/:promo', getDocumentsByPromo);

driveDocumentRouter.get('/getDocumentsBySemestre/:semestre', getDocumentsBySemestre);

driveDocumentRouter.get('/getDocumentsByCours/:cours', getDocumentsByCours);

export default driveDocumentRouter;
