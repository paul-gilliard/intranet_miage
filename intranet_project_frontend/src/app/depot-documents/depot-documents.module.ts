import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepotDocumentsRoutingModule } from './depot-documents-routing.module';
import { DocumentComponent } from './document/document.component';


@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    DepotDocumentsRoutingModule
  ],
  exports: [DocumentComponent]

})
export class DepotDocumentsModule { }
