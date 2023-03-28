import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { gamesRouter } from './routes/games.router';

const app: Application = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', gamesRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
