import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Messagerie, Message } from '../models/messagerie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {
    private apiUrl = 'http://localhost:3000/api';
    constructor(private http: HttpClient) { }

    getAllMessages(){
        return this.http.get<Messagerie>('http://localhost:3000/api/messagerie/getAllMessages');
    }

    getNumberOfMessages(){
        return this.http.get<JSON>('http://localhost:3000/api/messagerie/getNumberOfMessages');
    }

    sendMessage(message: Message){
        return this.http.post<Messagerie>('http://localhost:3000/api/messagerie/sendMessage', message);
    }

    //Email de l'émetteur
    getAllMessagesPrivate(email: String){
        return this.http.get<Messagerie>('http://localhost:3000/api/messagerie/getAllPrivateMessages/'+ email);
    }
    //
   

    getPrivateMessages(emetteur: string, recepteur: string): Observable<any> {
        const url = `${this.apiUrl}/messagerie-prive/${emetteur}/${recepteur}`;
        return this.http.get(url);
      }


    //Email du récepteur et pas de l'émetteur
    sendMessagePrivate(email: String, message: Message){
        return this.http.post<Messagerie>('http://localhost:3000/api/messagerie/sendPrivateMessage/'+ email, message);
    }
}