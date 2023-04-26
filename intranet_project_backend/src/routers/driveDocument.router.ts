import { Router } from 'express';
import multer from 'multer';
import { insertDocument, getAllDocuments, getDocumentsByPromo, getDocumentsBySemestre, getDocumentsByCours, getNumberOfDocuments, getDocumentById, deleteDocument} from '../controllers/driveDocument.controller';

const driveDocumentRouter = Router();
// Configuration de multer pour stocker les fichiers en mémoire

const upload = multer({ dest: 'uploads/' }); // Définir le dossier de destination pour les fichiers téléchargés

driveDocumentRouter.post('/insertDocument', upload.single('file'), insertDocument);

driveDocumentRouter.get('/getAllDocuments', getAllDocuments);

driveDocumentRouter.get('/getDocumentsByPromo/:promo', getDocumentsByPromo);

driveDocumentRouter.get('/getDocumentsBySemestre/:semestre', getDocumentsBySemestre);

driveDocumentRouter.get('/getDocumentsByCours/:cours', getDocumentsByCours);

driveDocumentRouter.get('/getNumberOfDocuments', getNumberOfDocuments);

driveDocumentRouter.get('/getDocumentById/:id', getDocumentById);

driveDocumentRouter.get('/deleteDocument/:id', deleteDocument);

export default driveDocumentRouter;
