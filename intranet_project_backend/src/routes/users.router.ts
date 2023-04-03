import { Router } from 'express';
import {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
} from '../controllers/users.controller';

const userRouter = Router();


// getAll des utilisateurs en BDD
userRouter.get('/users', getAllUsers);


// Créer un nouvel utilisateur
userRouter.post('/users', createUser);

// Lire un utilisateur par son ID
userRouter.get('/users/:id', getUserById);

// Mettre à jour un utilisateur par son ID
userRouter.patch('/users/:id', updateUserById);

// Supprimer un utilisateur par son ID
userRouter.delete('/users/:id', deleteUserById);

export default userRouter;