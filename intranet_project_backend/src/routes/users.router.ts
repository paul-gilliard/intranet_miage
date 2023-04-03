import { Router } from 'express';
import {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
  findUserByEmail,
} from '../controllers/users.controller';

const userRouter = Router();


// getAll des utilisateurs en BDD
userRouter.get('/users', getAllUsers);


// Créer un nouvel utilisateur
userRouter.post('/createUser', createUser);

// Lire un utilisateur par son ID
userRouter.get('/:id', getUserById);


// Lire un utilisateur par son ID
userRouter.get('/findByEmail/:email', findUserByEmail);

// Mettre à jour un utilisateur par son ID
userRouter.patch('/users/:id', updateUserById);

// Supprimer un utilisateur par son ID
userRouter.delete('/users/:id', deleteUserById);

export default userRouter;