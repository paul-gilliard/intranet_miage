import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriveDocument } from '../models/driveDocument.model';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {

    constructor(private http: HttpClient) { }

    getAllDocuments(){
        return this.http.get<DriveDocument>('http://localhost:3000/api/driveDocument/getAllDocuments');
    }

    getDocumentsBySemestre(semestre: String){
        return this.http.get<DriveDocument>('http://localhost:3000/api/driveDocument/getDocumentsBySemestre/' + semestre);
    }

    getDocumentsByCours(cours: String){
        return this.http.get<DriveDocument>('http://localhost:3000/api/driveDocument/getDocumentsByCours/' + cours);
    }

    getDocumentsByPromo(promo: String){
        return this.http.get<DriveDocument>('http://localhost:3000/api/driveDocument/getDocumentsByPromo/' + promo);
    }

    insertDocument(formData: FormData){
        return this.http.post<DriveDocument>('http://localhost:3000/api/driveDocument/insertDocument', formData);
    }

    //structure cours

    /**
     * driveDocumentRouter.get('/getdriveDocumentsStructure', getdriveDocumentsStructure);
     */


}
