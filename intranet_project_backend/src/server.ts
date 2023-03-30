import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { connectToDatabase } from './services/database.service';
import userRouter from './routes/users.router';

//const app: Application = express();
const port = 3000;
var cors = require('cors');

var app = express();
app.use(cors());
// Middleware
app.use(cors());
app.use(express.json());

connectToDatabase()
// Routes
app.use('/api', userRouter);
//app.use('/users', userRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));