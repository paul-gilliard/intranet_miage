import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/users.model';

const loginRouter = Router();
const JWT_SECRET = 'secret'; // à remplacer par votre clé secrète JWT

loginRouter.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send('Utilisateur introuvable');
      return;
    }

    // Générer un token JWT pour l'utilisateur
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur de serveur');
  }
});

export default loginRouter;