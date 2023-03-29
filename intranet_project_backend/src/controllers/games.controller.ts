import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import gameModel from '../models/game.model';

class GamesController {
  async create(req: Request, res: Response, next: NextFunction) {
    console.log(req.body.title);

    // var doc1 = new gameModel({ title: "John"});
    // doc1.save()


    try {
      console.log("dans le try");
      const game = new gameModel({
        title: req.body.title
      });
      await game.save();
      res.status(201).json({
        message: 'Game created',
        game
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new GamesController();
