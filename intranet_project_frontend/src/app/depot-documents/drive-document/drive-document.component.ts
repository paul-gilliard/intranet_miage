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
  document!: DriveDocument;
  sub!: Subscription;
  promo!: String;
  semestre!: String;
  cours!: String;
  link!: String;
  cursusStructure!: JSON;

  constructor(private documentService: DocumentService, private cursusStructureService: CursusStructureService){ }

  ngOnInit(): void {
    this.cursusStructureService.getCursusStructure().subscribe(data => {
      this.cursusStructure = data;
    });
    
  }
  
  ngOnChanges(): void {
    this.link = this.getLink();
  }

  getAllDocuments(){
    this.sub = this.documentService.getAllDocuments().subscribe({
      next: document => {
        this.documents?.push(document);
      }
    });
  }

  insertDocument(file : File, etiquetteCours: String, etiquettePromo: String, semestre: String, mail: String){
    this.document.etiquetteCours = etiquetteCours;
    this.document.etiquettePromo = etiquettePromo;
    this.document.semestre = semestre;
    this.document.mailOwner = mail;
    this.document.driveDocument = file;
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
