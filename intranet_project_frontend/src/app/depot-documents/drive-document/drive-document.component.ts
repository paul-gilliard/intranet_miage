import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DriveDocument } from 'src/app/models/driveDocument.model';
import { DocumentService } from 'src/app/services/document.service';
import { Buffer } from 'buffer';
import { Modal } from 'bootstrap';

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

  listeCours = [
    {
      title: 'License 3', 
        semestres:[
          {
            title: 'Semestre 5',
            cours: [
              'Cours 1', 
              'Cours 2'
            ]
          },
          {
            title: 'Semestre 6'
          }
        ]
    },
    {
      title: 'Master 1', 
        semestres:[
          {
            title: 'Semestre 7',
            cours: [
              'Cours 1', 
              'Cours 2'
            ]
          },
          {
            title: 'Semestre 8'
          }
        ]
    },
    {
      title: 'Master 2', 
        semestres:[
          {
            title: 'Semestre 9',
            cours: [
              'Cours 1', 
              'Cours 2'
            ]
          },
          {
            title: 'Semestre 10'
          }
        ]
    }
  ];

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

  openImportDocumentModal(){
    let element = document.getElementById("importDocumentModal") as HTMLElement;
    let myModal = new Modal (element);
    myModal.show();
  }
}
