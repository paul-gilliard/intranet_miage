import express, { Router, Request, Response, NextFunction } from 'express';
import gamesController from '../controllers/games.controller';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('List of games');
});

router.post('/', gamesController.create);

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  res.send(`Game with id ${id}`);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const updatedGame = req.body;
  console.log(`Update game with id ${id}`);
  console.log(updatedGame);
  res.send(`Game with id ${id} updated`);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  console.log(`Delete game with id ${id}`);
  res.send(`Game with id ${id} deleted`);
});

export { router as gamesRouter };
