import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Messagerie, Message } from '../models/messagerie.model';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

    constructor(private http: HttpClient) { }

    getAllMessages(){
        return this.http.get<Messagerie>('http://localhost:3000/api/messagerie/getAllMessages');
    }

    sendMessage(message: Message){
        console.log("message envoyé");
        return this.http.post<Messagerie>('http://localhost:3000/api/messagerie/sendMessage', message);
    }

    //Email de l'émetteur
    getAllMessagesPrivate(email: String){
        return this.http.get<Messagerie>('http://localhost:3000/api/messagerie/getAllPrivateMessages/'+ email);
    }

    //Email du récepteur et pas de l'émetteur
    sendMessagePrivate(email: String, message: Message){
        return this.http.post<Messagerie>('http://localhost:3000/api/messagerie/sendPrivateMessage/'+ email, message);
    }
}