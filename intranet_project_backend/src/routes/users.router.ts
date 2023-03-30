import { Router } from 'express';
import {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/users.controller';

const userRouter = Router();

// Créer un nouvel utilisateur
userRouter.post('/users', createUser);

// Lire un utilisateur par son ID
userRouter.get('/users/:id', getUserById);

// Mettre à jour un utilisateur par son ID
userRouter.patch('/users/:id', updateUserById);

// Supprimer un utilisateur par son ID
userRouter.delete('/users/:id', deleteUserById);

export default userRouter;