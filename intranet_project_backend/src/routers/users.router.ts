import { Router } from 'express';
import {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
  findUserByEmail
} from '../controllers/users.controller';
import { authenticateToken } from '../services/auth.service';

const userRouter = Router();


// getAll des utilisateurs en BDD
userRouter.get('/users', authenticateToken, getAllUsers);


// Créer un nouvel utilisateur
userRouter.post('/createUser', createUser);

// Lire un utilisateur par son ID
userRouter.get('/:id', authenticateToken, getUserById);


// Lire un utilisateur par son emaim
userRouter.get('/findByEmail/:email', authenticateToken, findUserByEmail);

// Mettre à jour un utilisateur par son ID
userRouter.patch('/users/:id', authenticateToken, updateUserById);

// Supprimer un utilisateur par son ID
userRouter.delete('/users/:id', authenticateToken, deleteUserById);

export default userRouter;