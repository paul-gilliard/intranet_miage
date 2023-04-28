import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = 'secret'; // à remplacer par votre clé secrète JWT

interface UserPayload {
  id: string;
  email: string;
}

export function createToken(user: UserPayload): string {
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
  return token;
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    next();
  });
}