import { Component, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DriveDocument } from 'src/app/models/driveDocument.model';
import { DocumentService } from 'src/app/services/document.service';
import { Modal } from 'bootstrap';
import { CursusStructureService } from 'src/app/services/cursus-structure.service';

@Component({
  selector: 'app-document',
  templateUrl: './drive-document.component.html',
  styleUrls: ['./drive-document.component.css']
})
export class DriveDocumentComponent implements OnInit, OnChanges{

  documents!: DriveDocument[];
  documentInsert!: DriveDocument;
  sub!: Subscription;
  promo!: String;
  semestre!: String;
  cours!: String;
  link!: String;
  cursusStructure!: JSON;

  constructor(private documentService: DocumentService, private cursusStructureService: CursusStructureService){ }

  ngOnInit() {
    this.cursusStructureService.getCursusStructure().subscribe(data => {
      this.cursusStructure = data;
    });
    this.getAllDocuments();    
  }
  
  ngOnChanges(): void {
    this.link = this.getLink();
  }

  async getAllDocuments(){
    let listeDoc = await this.documentService.getAllDocuments().toPromise();
    if(listeDoc){
      this.documents = listeDoc;
    }   
  }

  insertDocument(file : File, etiquetteCours: String, etiquettePromo: String, semestre: String, mail: String){
    this.documentInsert.etiquetteCours = etiquetteCours;
    this.documentInsert.etiquettePromo = etiquettePromo;
    this.documentInsert.semestre = semestre;
    this.documentInsert.mailOwner = mail;
    this.documentInsert.driveDocument = file;
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
