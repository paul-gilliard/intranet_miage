import express, { Application, Request, Response, NextFunction } from 'express';
import http from 'http';
import { Socket } from "socket.io";
import { connectToDatabase } from './services/database.service';
import bodyParser from 'body-parser';
import userRouter from './routers/users.router';
import loginRouter from './routers/login.router';
import messagerieRouter from './routers/messagerie.router';
import calendarRouter from './routers/calendar.router';
import driveDocumentRouter from './routers/driveDocument.router';
import cursusStructureRouter from './routers/cursus-structure.router';

interface SocketData {
  emeteur: string;
  text: string;
}

const app: Application = express();
const port: number = 3000;
const server: http.Server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectToDatabase();

app.use('/api/user', userRouter);
app.use('/api/messagerie', messagerieRouter);
app.use('/login', loginRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/driveDocument', driveDocumentRouter);
app.use('/api/cursusStructure', cursusStructureRouter);

interface PrivateMessage {
  emeteur: string;
  recepteur: string;
  text: string;
}


//message public
io.on('connection', (socket: Socket) => {
  console.log('Client connected');

  socket.on('new-message', (message: SocketData) => {
    console.log('New message received', message);
    io.emit('new-message', message);
  });
  socket.on('join', (data) => {
    socket.join(data.room);
    socket.broadcast.to(data.room).emit('user joined');
    console.log("*****************le room ", data.room, " est ajouté en Broadcast");
    });
  socket.on('new-private-message', (message: PrivateMessage) => {
    console.log('SERVER SOCKET: New private message received', message);
    // envoyer le message seulement à l'émetteur et au destinataire

    const room = `${message.emeteur}-${message.recepteur}`;
    socket.join(room); // Ajouter les deux utilisateurs à la salle
    socket.broadcast.to(room).emit('new-private-message',message);
    //io.in(room).emit('new-private-message', message);
    io.emit('new-private-message', message, room);
    
    //socket.to(message.emeteur).emit('new-private-message', message);
    //socket.to(message.recepteur).emit('new-private-message', message);
  });

  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(err);
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
