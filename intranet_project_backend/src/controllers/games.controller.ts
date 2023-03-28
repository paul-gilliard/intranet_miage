import { Request, Response, NextFunction } from 'express';
import Game from '../models/game';

class GamesController {
  async create(req: Request, res: Response, next: NextFunction) {
    console.log(req.body.title);
    
    // try {
    //   const game = new Game({
    //     title: req.body.title
    //   });
    //   await game.save();
    //   res.status(201).json({
    //     message: 'Game created',
    //     game
    //   });
    // } catch (err) {
    //   next(err);
    // }
  }
}

export default new GamesController();
