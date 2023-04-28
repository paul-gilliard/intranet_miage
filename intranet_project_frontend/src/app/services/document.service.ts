import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriveDocument } from '../models/driveDocument.model';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) { }

    getAllDocuments(){
        return this.http.get<DriveDocument[]>('http://localhost:3000/api/driveDocument/getAllDocuments');
    }

    getNumberOfDocuments(){
        return this.http.get<JSON>('http://localhost:3000/api/driveDocument/getNumberOfDocuments');
    }

    getDocumentsBySemestre(semestre: string){
        return this.http.get<DriveDocument[]>('http://localhost:3000/api/driveDocument/getDocumentsBySemestre/' + semestre);
    }

    getDocumentsByCours(cours: string){
        return this.http.get<DriveDocument[]>('http://localhost:3000/api/driveDocument/getDocumentsByCours/' + cours);
    }

    getDocumentsByPromo(promo: string){
        return this.http.get<DriveDocument[]>('http://localhost:3000/api/driveDocument/getDocumentsByPromo/' + promo);
    }

    insertDocument(formData: FormData) {
        return this.http.post<DriveDocument>('http://localhost:3000/api/driveDocument/insertDocument', formData);
    }

    getDocumentById(id: string){
        return this.http.get('http://localhost:3000/api/driveDocument/getDocumentById/' + id, { responseType: 'blob' });
    }

    deleteDocument(id: string){        
        return this.http.get('http://localhost:3000/api/driveDocument/deleteDocument/'+ id);
    }
}