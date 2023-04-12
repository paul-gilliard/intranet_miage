import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DriveDocument } from 'src/app/models/driveDocument.model';
import { DocumentService } from 'src/app/services/document.service';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-document',
  templateUrl: './drive-document.component.html',
  styleUrls: ['./drive-document.component.css']
})
export class DriveDocumentComponent {

  documents!: DriveDocument[];
  document!: DriveDocument;
  cours!: String[];
  sub!: Subscription;

  constructor(private service: DocumentService){ }

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
}
