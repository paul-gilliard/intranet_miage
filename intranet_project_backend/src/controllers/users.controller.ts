import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/users.model'; //import du modèle User

export const createUser = async (req: Request, res: Response) => {
  try {
    let user = new User(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user.password = hashedPassword;
    const savedUser = await user.save();
    res.status(201).send({ user: savedUser });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password'];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: typeof User[] = await User.find(); // récupère tous les utilisateurs
    res.status(200).send(users); // renvoie les utilisateurs au client
  } catch (error) {
    res.status(500).send(error); // renvoie une erreur 500 en cas d'erreur serveur
  }
};

export const findUserByEmail = async function findUserByEmail(req: Request, res: Response) {
  
  const email = req.params.email;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue' });
  }
}