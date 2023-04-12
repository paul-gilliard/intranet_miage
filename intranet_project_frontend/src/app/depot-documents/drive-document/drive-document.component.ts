import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DriveDocument } from 'src/app/models/driveDocument.model';
import { DocumentService } from 'src/app/services/document.service';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-document',
  templateUrl: './drive-document.component.html',
  styleUrls: ['./drive-document.component.css']
})
export class DriveDocumentComponent implements OnChanges{

  documents!: DriveDocument[];
  document!: DriveDocument;
  sub!: Subscription;
  promo!: String;
  semestre!: String;
  cours!: String;
  link!: String;

  constructor(private service: DocumentService){ }
  
  ngOnChanges(): void {
    this.link = this.getLink();
  }

  getAllDocuments(){
    this.sub = this.service.getAllDocuments().subscribe({
      next: document => {
        this.documents?.push(document);
      }
    });
  }

  insertDocument(buffer : Buffer, etiquetteCours: String, etiquettePromo: String, semestre: String, mail: String){
    this.document.etiquetteCours = etiquetteCours;
    this.document.etiquettePromo = etiquettePromo;
    this.document.semestre = semestre;
    this.document.mail = mail;
    this.document.document = buffer;
    
    this.service.insertDocument(this.document);
  }

  getPromo(promo: String){
    this.promo = promo;
  } 
  
  getSemestre(semestre: String){
    this.semestre = semestre;
  }
  
  getCours(cours: String){
    this.cours = cours;
  }

  getLink(): String{
    if(this.promo != undefined){
      if(this.semestre != undefined){
        if(this.cours != undefined){
          return this.promo+ " > "+ this.semestre+ " > "+ this.cours;
        }
        return this.promo+ " > "+ this.semestre;
      }
      return this.promo;
    }
    return '';
  }
}
