import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { connectToDatabase } from './services/database.service';
import bodyParser from 'body-parser';
import userRouter from './routers/users.router';
import loginRouter from './routers/login.router';


const port = 3000;
var cors = require('cors');

var app = express();
app.use(cors());
// Middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.json()); // pour parser les données envoyées en json
app.use(bodyParser.urlencoded({ extended: true })); // pour parser les données envoyées via urlencoded


connectToDatabase()
// Routes
app.use('/api/user', userRouter);
app.use('/login', loginRouter);
//app.use('/users', userRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));