import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Messagerie, Message } from '../models/messagerie.model';
import { BehaviorSubject, Observable, Subject, catchError, map, of } from 'rxjs';
import { MessagePrive, MessageriePrivee } from '../models/messagePrivee.model';
import axios from 'axios';
import { Socket, io } from 'socket.io-client';
import { User } from '../models/user.model';


@Injectable({
    providedIn: 'root'
})
export class MessagerieService {
    private apiUrl = 'http://localhost:3000/api';
     private  url: string='http://localhost:3000';
    private baseUrl = 'http://localhost:3000/api/messagerie';
    currentUserEmail = localStorage.getItem('currentUserEmail')!;
    //la variable qui permet de mettre à jour la messagerie courante
   
    private   _messageriePrive: MessageriePrivee={
    messagesPrive: [] as MessagePrive[],
    emeteur: '',
    recepteur: '',
      };;
   public  _messagePrive: MessagePrive = {
    emeteur:'',
    text: ''
    };
    //par défaut on initialise user à currentUser
    public clickedUser: User = {
        name: localStorage.getItem('currentUserName')!,
        email: localStorage.getItem('currentUserEmail')!,
        password: '',
        promo: '',
        statut: ''
    };
    socket!: Socket;
    constructor(private http: HttpClient) {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }
    public _isMessageriePrivate: boolean = false;

    getAllMessages() {
        return this.http.get<Messagerie>('http://localhost:3000/api/messagerie/getAllMessages');
    }

    sendMessage(message: Message) {
        return this.http.post<Messagerie>('http://localhost:3000/api/messagerie/sendMessage', message);
    }

    //Email de l'émetteur
    getAllMessagesPrivate(email: String) {
        return this.http.get<MessagePrive[]>('http://localhost:3000/api/messagerie/getAllPrivateMessages/' + email);
    }
    //
private messageriePriveSubject: BehaviorSubject<MessageriePrivee> = new BehaviorSubject<MessageriePrivee>(this._messageriePrive);

get messageriePrive$(): Observable<MessageriePrivee> {
  return this.messageriePriveSubject.asObservable();
}

setSelectedMessageriePrive(value: MessageriePrivee): void {
  this._messageriePrive = value;
  
  
  this.messageriePriveSubject.next(value);
}

    getPrivateMessages(emetteur: string, recepteur: string): Observable<any> {
        const url = `${this.apiUrl}/messagerie/privateMessages/${recepteur}/${emetteur}`;
        return this.http.get(url);
    }


    //Email du récepteur et pas de l'émetteur
    sendPrivateMessage(emeteur: string, recepteur: String, text: String) {
        const body = {
            emeteur: emeteur,
            recepteur: recepteur,
            text: text
        };
       /* this.messagePrive.emeteur = emeteur;
        this.messagePrive.text = (<string>text);
        this._messageriePrive.messagesPrive.push(this._messagePrive);
        this.setSelectedMessageriePrive(this._messageriePrive);*/
        
        this.socket.emit('new-private-message', { emeteur: this.currentUserEmail, recepteur: recepteur, text });
        return this.http.post('http://localhost:3000/api/messagerie/sendPrivateMessage', body);
        
    }
    
    /*sendPrivateMessage(emeteur: string, recepteur: string, text: String): Observable<any> {
  const body = {
    emeteur: emeteur,
    recepteur: recepteur,
    text: text
  };
  return this.http.post('http://localhost:3000/api/messagerie/sendPrivateMessage', body).pipe(
    map((response: any) => {
      const newObject = {
        messages: response.messsages,
          emeteur: response.emeteur,
        recepteur: response.recepteur
        // etc.
      };
      return newObject;
    })
  );
}
*/

    //
    getPrivateMessagesBetweenUsers(emeteur: string, recepteur: string): Observable<MessagePrive[]> {
    const url = `${this.baseUrl}/getPrivateMessagesBetweenUsers/${emeteur}/${recepteur}`;
    return this.http.get<MessagePrive[]>(url);
    }
    public get messageriePrive(): MessageriePrivee {
    return this._messageriePrive;
  }

  public set messageriePrive(value: MessageriePrivee) {
    this._messageriePrive = value;
  }

  // Getter et Setter pour _messagePrive
  public get messagePrive(): MessagePrive {
    return this._messagePrive;
  }

  public set messagePrive(value: MessagePrive) {
    this._messagePrive = value;
    }
    public set isMessageriePrivate( value: boolean) {
        this._isMessageriePrivate = value;
    }
    public get isMessageriePrivate() {
        return this._isMessageriePrivate;
        
    }
      joinRoom(room: any): void {
    this.socket.emit('join', room);
  }
 
    getMessagesAvecContact(emailContact: string): Observable<MessageriePrivee> {
  const messageriePrivee: MessageriePrivee = {
    messagesPrive: [] as MessagePrive[],
    emeteur: '',
    recepteur: emailContact,
  };
  return this.getAllMessagesPrivate(localStorage.getItem('currentUserEmail')!).pipe(
    map((messagesPrive: any[]) => {
      messageriePrivee.messagesPrive = messagesPrive.flatMap((mp: any) => {
        if (mp.emeteur === emailContact || mp.recepteur === emailContact) {
          return mp.messages.map((msg: any) => {
            return {
              emeteur: mp.emeteur,
              recepteur: mp.recepteur,
              text: msg.text
            };
          });
        } else {
          return [];
        }
      });
      messageriePrivee.emeteur = localStorage.getItem('currentUserEmail')!;
      return messageriePrivee;
    }),
    catchError((error: any) => {
      console.log('Une erreur est survenue lors de la récupération des messages privés', error);
      return of(messageriePrivee);
    })
  );
    }

 
    
    getMessagePrivate(): Observable<any> {
    return new Observable<{message: MessagePrive}>(observer => {
      this.socket.on('new-private-message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }

    
    
    /*
    /private-messages/:emeteur/:recepteur
    getPrivateMessages(emeteur: string, recepteur: string): Observable<MessagePrive[]> {
const params = { emeteur, recepteur };
    return this.http.get<MessagePrive[]>('http://localhost:3000/api/messagerie/privateMessages/', { params });
  }
  */
  


}
/*
const getPrivateMessagesBetweenUsers = async (emeteur: string, recepteur: string) => {
  try {
    const response = await axios.get(`/api/messagerie/getPrivateMessagesBetweenUsers/${emeteur}/${recepteur}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getPrivateMessagesBetweenUsers;
*/