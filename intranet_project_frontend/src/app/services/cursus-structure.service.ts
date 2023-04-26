import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CursusStructureService {

    constructor(private http: HttpClient) { }

    getCursusStructure(){       
        return this.http.get<JSON>('http://localhost:3000/api/cursusStructure/getCursusStructure');
    }

}
