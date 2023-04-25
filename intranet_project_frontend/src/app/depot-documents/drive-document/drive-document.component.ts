import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  link!: String;
  promo!: String;
  semestre!: String;
  cours!: String;
  cursusStructure!: JSON;

  constructor(private documentService: DocumentService, private cursusStructureService: CursusStructureService){ }

  ngOnInit() {
    this.cursusStructureService.getCursusStructure().subscribe(data => {
      this.cursusStructure = data;
    });
    this.getAllDocuments();    
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let link in changes){
      this.getDocuments(link);
    }    
  }

  getDocuments(link: String){
    if(this.link !== null){
      if(this.cours !== null){
        this.getDocumentsByCours(this.cours);
      } else if(this.semestre !== null){
        this.getDocumentsBySemestre(this.semestre);
      } else {
        this.getDocumentsByPromo(this.promo);
      }
    } else {
      this.getAllDocuments();
    }
  }

  async getAllDocuments(){
    let listeDoc = await this.documentService.getAllDocuments().toPromise();
    if(listeDoc){
      this.documents = listeDoc;
    }   
  }

  async getDocumentsByPromo(promo: String){
    let listeDoc = await this.documentService.getDocumentsByPromo(promo).toPromise();
    if(listeDoc){
      this.documents = listeDoc;
    }   
  }

  async getDocumentsBySemestre(semestre: String){
    let listeDoc = await this.documentService.getDocumentsBySemestre(semestre).toPromise();
    if(listeDoc){
      this.documents = listeDoc;
    }   
  }

  async getDocumentsByCours(cours: String){
    let listeDoc = await this.documentService.getDocumentsByCours(cours).toPromise();
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

  openImportDocumentModal(){
    let element = document.getElementById("importDocumentModal") as HTMLElement;
    let myModal = new Modal (element);
    myModal.show();
  }
}
