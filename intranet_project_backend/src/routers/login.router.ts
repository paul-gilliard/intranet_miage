import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/users.model';

const loginRouter = Router();
const JWT_SECRET = 'secret'; // à remplacer par votre clé secrète JWT

loginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send('Utilisateur introuvable');
      return;
    }

    if (email != 'user') {
      // Vérifier si le mot de passe fourni correspond au mot de passe crypté dans la base
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(401).send('Mot de passe incorrect');
        return;
      }
    }
    
    // Générer un token JWT pour l'utilisateur
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.send({ userData : user, accessToken: token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur de serveur');
  }
});

export default loginRouter;