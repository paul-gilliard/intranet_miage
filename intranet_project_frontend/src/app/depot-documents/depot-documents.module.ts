import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveDocumentComponent } from './drive-document/drive-document.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { ModalImportComponent } from './modal-import/modal-import.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DriveDocumentComponent,
    ListeCoursComponent,
    ModalImportComponent
  ],
  imports: [
    CommonModule,
    NgbAccordionModule 
  ],
  exports: [DriveDocumentComponent]

})
export class DepotDocumentsModule { }
