import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriveDocument } from '../models/driveDocument.model';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) { }

    getAllDocuments(){
        return this.http.get<DriveDocument>('http://localhost:3000/api/document/getAllDocuments');
    }

    getDocumentsBySemestre(semestre: String){
        return this.http.get<DriveDocument>('http://localhost:3000/api/document/getDocumentsBySemestre/' + semestre);
    }

    getDocumentsByCours(cours: String){
        return this.http.get<DriveDocument>('http://localhost:3000/api/document/getDocumentsByCours/' + cours);
    }

    getDocumentsByPromo(promo: String){
        return this.http.get<DriveDocument>('http://localhost:3000/api/document/getDocumentsByPromo/' + promo);
    }

    insertDocument(document: DriveDocument){
        return this.http.post<DriveDocument>('http://localhost:3000/api/document/insertDocument', document);
    }

    //structure cours
}