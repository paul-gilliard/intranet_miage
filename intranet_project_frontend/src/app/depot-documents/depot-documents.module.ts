import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepotDocumentsRoutingModule } from './depot-documents-routing.module';
import { DriveDocumentComponent } from './drive-document/drive-document.component';
import { ListeCoursComponent } from './liste-cours/liste-cours.component';
import { ModalImportComponent } from './modal-import/modal-import.component';


@NgModule({
  declarations: [
    DriveDocumentComponent,
    ListeCoursComponent,
    ModalImportComponent
  ],
  imports: [
    CommonModule,
    DepotDocumentsRoutingModule
  ],
  exports: [DriveDocumentComponent]

})
export class DepotDocumentsModule { }
