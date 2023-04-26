import { Router } from 'express';
import multer, { Multer } from 'multer';
import { insertDocument, getAllDocuments, getDocumentsByPromo, getDocumentsBySemestre, getDocumentsByCours, getNumberOfDocuments, getDocumentById, deleteDocument} from '../controllers/driveDocument.controller';
import { authenticateToken } from '../services/auth.service';

const driveDocumentRouter = Router();
// Configuration de multer pour stocker les fichiers en mémoire

const upload = multer({ dest: 'uploads/' }); // Définir le dossier de destination pour les fichiers téléchargés

driveDocumentRouter.post('/insertDocument', authenticateToken, upload.single('file'), insertDocument);

driveDocumentRouter.get('/getAllDocuments', authenticateToken, getAllDocuments);

driveDocumentRouter.get('/getDocumentsByPromo/:promo', authenticateToken, getDocumentsByPromo);

driveDocumentRouter.get('/getDocumentsBySemestre/:semestre', authenticateToken, getDocumentsBySemestre);

driveDocumentRouter.get('/getDocumentsByCours/:cours', authenticateToken, getDocumentsByCours);

driveDocumentRouter.get('/getNumberOfDocuments', authenticateToken, getNumberOfDocuments);

driveDocumentRouter.get('/getDocumentById/:id', authenticateToken, getDocumentById);

driveDocumentRouter.get('/deleteDocument/:id', authenticateToken, deleteDocument);

export default driveDocumentRouter;
